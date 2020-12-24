const { ipcMain } = require('electron');
const session = require('./proxyManager');
const API = require('./APIcontroller')



ipcMain.on('open-session', (e, idSession)=>{
    session.open(idSession)
    // console.log(" \t session responde with ", nav);
})
  
ipcMain.on('ask-for-auth', (event, args) =>{
    API.connect(args.email, args.passWord).then(res => {
        event.reply('ask-for-auth-reply', res.statusCode < 400)
    }).catch(err => {
        // erro to handl
    })
})
let data= {
    Objet:'',
    Content: '',
    senderId: '',
   
};
ipcMain.on('send-message', (event, data) =>{
    API.sendMessage(data).then(res => {
        event.reply('send-message-reply', res.statusCode < 400)
    }).catch(err => {
        // erro to handl
    })
})