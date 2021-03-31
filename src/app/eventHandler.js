/**
 * @module
 * 
 * @name eventHandler
 * @description module that manage the communication between the front and back end
 */

const { ipcMain } = require('electron');
const openNav = require('./Controllers/navigatorController').open
const save = require('./Controllers/sessionDataController').export
const getSessions = require('./API/session').getSessions
const connect = require('./API/auth').connect
const createUser = require('./API/user').signUp
const apiMessage = require('./API/message');
const apiUser = require('./API/user');
const getProfile = require('./API/user').getUser


/** 
 * @method
 * @name open-session
 * @description listen for event "open-session" for openning a session (navigator)
 * @param {Number} idSession wich session will be opend
 * @see navigatorController
 */
ipcMain.on('open-session', (e, idSession)=>{
    openNav(idSession)
})


ipcMain.on('get-session', event => {
    getSessions(true).then(res =>{
        event.reply('get-session-reply', res)
    })
})

ipcMain.on('export-session', (e, idSession) =>{
    save(idSession)
})

ipcMain.on('ask-for-auth', (event, args) =>{
    
    connect(args.email, args.passWord).then(res => {
        __token = res.token
        getProfile().then(res => {
            __user = res
        }).catch(console.log)
        event.reply('ask-for-auth-reply', true)
    }).catch(err => {
        event.reply('ask-for-auth-reply', false, err.error.err)
    })
})

ipcMain.on('get-header', event =>{
    event.reply('get-header-reply', __requetHeader)
})


ipcMain.on('create-account', (event, user) => {
    createUser(user).then(res =>{
        event.reply('create-account-reply', true)
    }).catch(console.log)
})

ipcMain.on('get-sessions', (event) => {
    getSessions(true).then(res => {
        event.reply('get-sessions-reply', res)
    }).catch(console.log)
})

// Message 
ipcMain.on('send-message', (event, data) =>{
    apiMessage.sendMessage(data, (err, res, body)=> {
        event.reply('send-message-reply',true)     
     })
});

//Users
ipcMain.on('update-user', ( event, data) =>{
    apiUser.updateUser(data, (res)=> {
        event.reply('update-user-reply', true)  
     })
});
ipcMain.on('get-user',_=>{
    apiUser.getUser()
    });

ipcMain.on('get-api-cred', (event) => {
    event.reply('get-api-cred-reply', {apiUrl: __API_URL, token: __token})
})

