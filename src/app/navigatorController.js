const Navigator = require('chromium');
const { exec } = require('child_process');
const api = require('./APIcontroller')
const path = require('path')


const setProcessCommand = (attributes) => {
    res = '';
    if (attributes.cmd) res = `${attributes.cmd}`;
    if (attributes.headless) res = `${res} --headless --disable-gpu`;
    if (attributes.proxy) res = `${res} --proxy-server=${attributes.proxy.url}:${attributes.proxy.port}`;
    if (attributes.dir) res = `${res} --user-data-dir=${attributes.dir}`;
    if (attributes.debug) res = `${res} --remote-debugging-port=${attributes.debug}`;
    console.log(res);
    return res;
}

module.exports = {
    open: (id) => {
        console.log(__filename,' ==> opening a navigator ... (asking for proxy)');
        api.getProxy().then(prx =>{
            console.log(prx.proxy);
            console.log(__filename,' ==> received proxy ',prx,' opening Navigator');
            let child = exec(
                setProcessCommand({
                    cmd: Navigator.path,
                    dir : path.join(__userDataDir,'navSessions', `session-${id}`),
                    proxy : {
                        url: __API_URL,
                        port: prx.split(':')[3]
                    }
                }),
                (err, stdout, stderr) => {
                    console.log(__filename,' ==> navigator is closed (asking to close proxy)');
                    console.log(prx.split(':')[3])
                    api.closeProxy(prx.split(':')[3])
                    if(err) return -1
                    return { stdout: stdout, stderr: stderr }
                }
            );
        })
    }
}