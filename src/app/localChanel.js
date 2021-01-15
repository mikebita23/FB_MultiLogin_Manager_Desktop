const http = require('http');

module.exports = {
    create: (callback)=>{
        return http.createServer(callback)
    },
    
    start: (server, port, timeOut)=>{
        if(timeOut) server.timeout = timeOut;
        server.listen(port || 8888)
    },

    close: (server)=>{
        server.close()
    }
}