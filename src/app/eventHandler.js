/**
 * @module
 * 
 * @name eventHandler
 * @description module that manage the communication between the front and back end
 */

const { ipcMain } = require('electron');
const nav = require('./Controllers/navigatorController')
const API = require('./API/proxy')


/** 
 * @method
 * @name open-session
 * @description listen for event "open-session" for openning a session (navigator)
 * @param {Number} idSession wich session will be opend
 * @see navigatorController
 */
ipcMain.on('open-session', (e, idSession)=>{
    // console.log(__filename,' ===> openning a session with id : ',idSession);
    // nav.open(idSession)
    // console.log(__filename,' ===> session with id : ',idSession,'is closed');
    nav.open(idSession)
})

// ipcMain.on('ask-for-auth', (event, args) =>{
//     API.connect(args.email, args.passWord).then(res => {
//         event.reply('ask-for-auth-reply', res.statusCode < 400)
//     }).catch(err => {
//         // erro to handl
//     })
// })