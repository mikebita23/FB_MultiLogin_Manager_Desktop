const path = require('path')
const fs = require("fs-extra")

/**
 * @global
 * @name __API_URL
 * @description global variable containg API url
 */

     global.__API_URL = "http://localhost:3004";

/**
 * @global
 * @name __token
 * @description global variable containg the token wich will be used when communicating with the API
 */

    global.__token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHJvb3QuY29tIiwidXNlcklkIjo4MDE4LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTE2NzUyODcsImV4cCI6MTYxMTY3ODg4N30.h6rKmpbEx1pLf43zd1WAIj8GyPMK0Df_1nC_0KQYBbY'


/**
 * @global
 * @name __navSessionDir
 * @description global variable containg the token wich will be used when communicating with the API
 */
    global.__navSessionDir = path.join(__userDataDir, 'navSessions/')
    fs.ensureDirSync(__navSessionDir)
   

/**
 * @global
 * @name __sessionBackUpdir
 * @description global variable containg the token wich will be used when communicating with the API
 */
   
    global.__sessionBackUpdir = path.join(__userDataDir, 'navSessionsBackup/')
    fs.ensureDirSync(__sessionBackUpdir)