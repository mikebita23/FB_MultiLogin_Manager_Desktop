const
    Navigator = require('chromium'),
    { exec } = require('child_process'),
    api = require('../API/proxy'),
    path = require('path'),
    proxyChain = require('proxy-chain'),
    chanel = require('../helpers/localChanel').localChannel ;

const setProcessCommand = (attributes) => {
    res = '';
    if (attributes.cmd) res = `${attributes.cmd}`;
    if (attributes.headless) res = `${res} --headless --disable-gpu`;
    if (attributes.proxy) res = `${res} --proxy-server=${attributes.proxy}`;
    if (attributes.dir) res = `${res} --user-data-dir="${attributes.dir}"`;
    if (attributes.debug) res = `${res} --remote-debugging-port=${attributes.debug}`;
    return res;
}

const localServerCallback = (req, res) => {
    if (req.method === 'POST' && req.url === '/get') 
        res.end(JSON.stringify({
            email: 'imported@gmail.com',
            pwd: 'This_is_The_Fucking_Noker_Bitch' 
        }))
}

module.exports = {
    open: (id) => {
        console.log(__userDataDir);
        api.getProxy().then(res => {
            let lumProxy = JSON.parse(res).url;
            let localChanel = new chanel(localServerCallback)
            proxyChain.anonymizeProxy(lumProxy).then(prx => {
                localChanel.start()
                let child = exec(
                    setProcessCommand({
                        cmd: Navigator.path,
                        proxy: prx,
                        dir: path.join(__userDataDir, 'navSessions', `session-${id}`)
                    }),
                    (err, stdout, stderr) => {
                        proxyChain.closeAnonymizedProxy(prx);
                        localChanel.stop()
                    }
                )
            });
        })
    }
}