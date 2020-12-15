const { ipcMain } = require('electron');
const session = require('./proxyManager');



ipcMain.on('open-session', (e, idSession)=>{
    session.open(idSession)
    // console.log(" \t session responde with ", nav);
})

ipcMain.on('ask-for-auth', (e, data) =>{
    //ask for token
})