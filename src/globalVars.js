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

    global.__token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHJvb3QuY29tIiwidXNlcklkIjo4MDE4LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTQwMDM1MjcsImV4cCI6MTYxNDAwNzEyN30.Eb8Qpcnt9cN30jFHpXnrBt7b490ET3GMVOn0XRGoAgw'


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

/**
 * @global
 * @name __user
 * @description global variable containg the user data
 */
    global.__user = {}