const Navigator = require('chromium');
const {
    exec
} = require('child_process');
const ProxyChain = require('proxy-chain');
const path = require('path')

ggdfghjkfgh
dfcghj
const setProcessCommand = (attributes) => {
    res = '';
    if (attributes.cmd) res = `${attributes.cmd}`;
    if (attributes.headless) res = `${res} --headless --disable-gpu`;
    if (attributes.proxy) res = `${res} --proxy-server=${attributes.proxy.url}:${attributes.proxy.port}`;
    if (attributes.dir) res = `${res} --user-data-dir=${attributes.dir}`;
    if (attributes.debug) res = `${res} --remote-debugging-port=${attributes.debug}`;
    return res;
}

module.exports = {
    open: (id, proxy) => {
        let child = exec(
            setProcessCommand({
                cmd: Navigator.path,
                dir: path.join(__userDataDir, 'navSessions', `session-${id}`),
                proxy: {
                    url: proxy.split(':')[1].split('/')[2],
                    port: proxy.split(':')[2]
                }
            }),
            (err, stdout, stderr) => {
                ProxyChain.closeAnonymizedProxy(proxy, true)
                if (err) return -1
                return {
                    stdout: stdout,
                    stderr: stderr
                }
            }
        );
    }
}