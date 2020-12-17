const Navigator = require('./navigatorController')
const ProxyChain = require('proxy-chain');

const luminatiProxyUrl = "http://lum-customer-williamsellier-zone-residential20:lts3a949g9hw@zproxy.lum-superproxy.io:22225";



// ProxyChain.anonymizeProxy(luminatiProxyUrl).then( proxy =>{

//     console.log(" ------- Proxy chain created successfully : ", proxy);

//     let execCmd = setProcessCommand({
//         cmd : Navigator.path,
//         proxy : {
//             url: proxy.split(':')[1].split('/')[2],
//             port: proxy.split(':')[2]
//         },
//         dir: `".\\sessionData\\${sessionId}"`
//     });

//     console.log(" ------- Executing Command : \n", execCmd);
//     setStatus(1)
//     let child = Process.exec(
//         execCmd,
//         (err, stdout, stderr) => {
//             console.log(" ------- The cmd was terminated \n", err, stdout, stderr);
//             ProxyChain.closeAnonymizedProxy(proxy, true)
//             setStatus(0)
//         }
//     );

// }).catch(()=>{
//     console.error('Something Went Wrong while creating proxy chain !');
// })


module.exports = {
    open: id =>{
        ProxyChain.anonymizeProxy(luminatiProxyUrl).then( proxy => {
            Navigator.open(id, proxy)
        })
    }
}