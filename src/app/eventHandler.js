/**
 * @module
 * 
 * @name eventHandler
 * @description module that manage the communication between the front and back end
 */

const { ipcMain } = require('electron');
const openNav = require('./Controllers/navigatorController').open
const save = require('./Controllers/exportController').export
const connect = require('./API/auth').connect


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
    openNav(idSession)
})


ipcMain.on('export-session', (e, idSession) =>{
    save(idSession)
})

ipcMain.on('ask-for-auth', (event, args) =>{
    connect(args.email, args.passWord).then(res => {
        __token = res.token
        event.reply('ask-for-auth-reply', true)
    }).catch(err => {
        event.reply('ask-for-auth-reply', false, err.error.err)
    })
})