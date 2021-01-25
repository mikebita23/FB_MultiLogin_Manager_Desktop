/**
 * @module
 * @name navigatorController
 * @description open chromium navigators
 * 
 */

const Navigator = require('chromium');
const { exec } = require('child_process');
const api = require('../API/proxy')
const path = require('path')
const proxyChain = require('proxy-chain');

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
    if (attributes.dir) res = `${res} --user-data-dir=${attributes.dir}`;
    if (attributes.debug) res = `${res} --remote-debugging-port=${attributes.debug}`;
    return res;
}

module.exports = {

    /**
     * Create a proxy chain to use the anonymized proxy instead of of luminaty proxy and launch chrommium session 
     * @param {Number} id Session's Id
     * @see API:proxy
     */

     open: (id) => {
        api.getProxy().then(res => {
            let lumProxy = JSON.parse(res).url;
            proxyChain.anonymizeProxy(lumProxy).then(prx => {
                let child = exec(
                    setProcessCommand({
                        cmd: Navigator.path,
                        proxy: prx,
                        dir: path.join(__userDataDir, 'navSessions', `session-${id}`)
                    }),
                    (err, stdout, stderr) => {
                        proxyChain.closeAnonymizedProxy(prx)
                    }
                )
            });
        })
    }
}