/**
 * @category API
 * @module message
 * @description manage the api call for messages
 */
const request = require('request-promise');


module.exports = {
   

    sendMessage: (messageData, callBack) => {
        return request({
            method: 'POST',
            url: `${__API_URL}/Msg/add`,
            body: {
                Object: messageData.Object,
                Content: messageData.Content
               
            },
            auth: {
                'bearer': __token
            },
            json: true
        }, callBack)
    }
    
}
