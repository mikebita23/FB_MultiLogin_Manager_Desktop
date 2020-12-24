const Navigator = require('chromium');
const { exec } = require('child_process');
const api = require('../API/proxy')
const path = require('path')
const proxyChain = require('proxy-chain');

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