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

    global.__token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHJvb3QuY29tIiwidXNlcklkIjo4MDE4LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTI1MzUxNzgsImV4cCI6MTYxMjUzODc3OH0.pUeJjfjQNJoR7fVEb7gQrvQxuOe0yRGkrD1jf_hMvGI'


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