const request = require('request-promise');

const API_URL = "http://api.infinite-scale.fr";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imdsc0BnbHMuY29tIiwidXNlcklkIjozNiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjA5NzU0NTE0LCJleHAiOjE2MDk3NTgxMTR9.3ytip4SHuAEgpExEnMx4Mow2tdJVwnd4VShPzxUqf54"
}
module.exports = {
   

    sendMessage: (messageData, callBack) => {
        return request({
            method: 'POST',
            url: `${API_URL}/Msg/add`,
            body: {
                Object: messageData.Object,
                Content: messageData.Content
               
            },
            auth: Auth,
            json: true
        }, callBack)
    }
    
}
