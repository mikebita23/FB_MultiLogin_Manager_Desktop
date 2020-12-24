// const { ipcMain } = require('electron');
// const nav = require('./Controllers/navigatorController')
// const API = require('./API/proxy')



// ipcMain.on('open-session', (e, idSession)=>{
//     // console.log(__filename,' ===> openning a session with id : ',idSession);
//     // nav.open(idSession)
//     // console.log(__filename,' ===> session with id : ',idSession,'is closed');
//     API.getProxy().then(res => {
//         console.log(res);
//     })
// })

// ipcMain.on('ask-for-auth', (event, args) =>{
//     API.connect(args.email, args.passWord).then(res => {
//         event.reply('ask-for-auth-reply', res.statusCode < 400)
//     }).catch(err => {
//         // erro to handl
//     })
// })