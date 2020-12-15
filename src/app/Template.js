const Navigator = require('chromium');
const ProxyChain = require('proxy-chain');
const Process = require('child_process');

const luminatiProxyUrl = "http://lum-customer-williamsellier-zone-residential20:lts3a949g9hw@zproxy.lum-superproxy.io:22225";

const sessionId = '555999111';
var status = 0;

const setStatus = val => {
    if( val == 0 || val == 1|| val == -1 )
        status = val;
}

const setProcessCommand = (attributes) => {
    res = '';
    if (attributes.cmd) res = `${attributes.cmd}`;
    if (attributes.headless) res = `${res} --headless --disable-gpu`;
    if (attributes.proxy) res = `${res} --proxy-server=${attributes.proxy.url}:${attributes.proxy.port}`;
    if (attributes.dir) res = `${res} --user-data-dir=${attributes.dir}`;
    if (attributes.debug) res = `${res} --remote-debugging-port=${attributes.debug}`;
    return res;
}

ProxyChain.anonymizeProxy(luminatiProxyUrl).then( proxy =>{

    console.log(" ------- Proxy chain created successfully : ", proxy);

    let execCmd = setProcessCommand({
        cmd : Navigator.path,
        proxy : {
            url: proxy.split(':')[1].split('/')[2],
            port: proxy.split(':')[2]
        },
        dir: `".\\sessionData\\${sessionId}"`
    });

    console.log(" ------- Executing Command : \n", execCmd);
    setStatus(1)
    let child = Process.exec(
        execCmd,
        (err, stdout, stderr) => {
            console.log(" ------- The cmd was terminated \n", err, stdout, stderr);
            ProxyChain.closeAnonymizedProxy(proxy, true)
            setStatus(0)
        }
    );

}).catch(()=>{
    console.error('Something Went Wrong while creating proxy chain !');
})