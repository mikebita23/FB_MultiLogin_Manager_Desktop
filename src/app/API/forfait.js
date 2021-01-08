const request = require('request-promise');

const API_URL = "https://gls-login.herokuapp.com";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2lAbWlraS5jb20iLCJ1c2VySWQiOjE1MiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjEwMTE0NzIxLCJleHAiOjE2MTAxMTgzMjF9._We9iMAnJyifNO2PWp1hOH8DD_Ce5T-uPjHgi4b6Jm0"
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