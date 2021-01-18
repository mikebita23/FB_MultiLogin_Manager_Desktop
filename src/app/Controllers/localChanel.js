const http = require('http');

/**
 *  @description creat a localhost server to comunicate with navigator
 */
class localChannel{
    /**
     * @constructor
     * @param {Function} callback - callback function to execute when the channel is oppend 
     */
    constructor(callback){
        this.server = http.createServer(callback);
    }
    /**
     * @description launch the server and start listening
     * @param {Number} port - Channel port default is 8888
     * @param {Number} timeOut - set the timeout for Channel response default is 3s
     */
    start(port, timeOut){
        this.server.timeout = timeOut || 3000;
        this.server.listen(port || 8888)
    }
    /**
     * @description kill the communication chanel channel
     */
    stop() {
        this.server.close();
    }
}

module.exports.localChannel = localChannel;