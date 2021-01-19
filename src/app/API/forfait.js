const request = require('request-promise');

const API_URL = "http://api.infinite-scale.fr";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6ZXJ0eUBnbWFpbC5jb20iLCJ1c2VySWQiOjUsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxMDk1ODA3NSwiZXhwIjoxNjEwOTYxNjc1fQ.0U2904bvGZbXQZo3V6FoKJGcA8hM4_B1gAabWUPSbMM"
}
module.exports = {
   

    getForfaits: () => {
        return request({
            method: 'GET',
            url: `${API_URL}/forf/all`,
            
            auth: Auth,
            json: true
        }, callBack)
    }
    
}