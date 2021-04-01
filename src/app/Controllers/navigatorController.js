/**
 * @module
 * @name navigatorController
 * @description open chromium navigators
 * 
 */

const Navigator = require('chromium');
const { exec } = require('child_process');
const api = require('../API/proxy')
const sesion = require('../API/session')
const path = require('path')
const proxyChain = require('proxy-chain');
const fs = require('fs')
const sdCtrl = require('./sessionDataController');
const session = require('../API/session');

/**
 * Transform an object of parameters to an executable CLI command
 * @param {Object} attributes attribute used when launching the chromium
 * @param {String} attributes.cmd command that will be executed ( chromium path )
 * @param {Boolean} [attributes.headless=false]  true if you need headless navigator 
 * @param {String} attributes.proxy proxy url 
 * @param {String} attributes.dir user profile directory
 * @param {String | Number} attributes.debug set the port for debugging
 * @returns {String} string that well be executed by the OS
 */

 const setProcessCommand = (attributes) => {
    res = '';
    if (attributes.cmd) res = `${attributes.cmd}`;
    if (attributes.headless) res = `${res} --headless --disable-gpu`;
    if (attributes.proxy) res = `${res} --proxy-server=${attributes.proxy}`;
    if (attributes.dir) res = `${res} --user-data-dir="${attributes.dir}"`;
    if (attributes.debug) res = `${res} --remote-debugging-port=${attributes.debug}`;
    if (attributes.ext) res =  `${res} --load-extension="${attributes.ext}"`;
    return res;
}

function setupCred(id) {
    return new Promise( async (resolve, reject)=>{
        sessionData = await session.getSession(id)
        fs.writeFile(path.join(__rootDir, 'app/Extension/credentials.json'), JSON.stringify(sessionData.credentials), (err)=>{
            if(err){
                console.log(err);
                reject(err)
            }
            resolve()
        })
        
    })
}

function setupProxy() {
    return new Promise(async (resolve, reject)=>{
        let lumProxy = JSON.parse(await api.getProxy()).url
        console.log(lumProxy);
        let localProxy = await proxyChain.anonymizeProxy(lumProxy) 
        resolve(localProxy)
    })
}


module.exports = {

    /**
     * Create a proxy chain to use the anonymized proxy instead of of luminaty proxy and launch chrommium session 
     * @param {Number} id Session's Id
     * @see API.proxy
     */

    open: (id) => {

        if(fs.existsSync(path.join(__userDataDir, 'navSessions', `${id}`))){
            Promise.all([setupCred(id), setupProxy()]).then( res => {
                console.log(res);
                let child = exec(
                    setProcessCommand({
                        cmd: Navigator.path,
                        proxy: res[1],
                        dir: path.join(__userDataDir, 'navSessions', `${id}`),
                        ext: path.join(__rootDir, 'app/Extension')
                    }),
                    (err, stdout, stderr) => {
                        proxyChain.closeAnonymizedProxy(res[1]);
                    }
                )
            }).catch(console.log)
        }else{
            sdCtrl.download(id)
        }

    }
}