window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");
const request = require('request-promise');
const API_URL1 = "https://gls-login.herokuapp.com";
    const Auth1 = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2lAbWlraS5jb20iLCJ1c2VySWQiOjE1MiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjEwMTE0NzIxLCJleHAiOjE2MTAxMTgzMjF9._We9iMAnJyifNO2PWp1hOH8DD_Ce5T-uPjHgi4b6Jm0"
}

var data;
function getData() {
    return request({
        method: 'GET',
        url: `${API_URL1}/forf/all`,
        auth: Auth1,
        json: true
    }).then(res => {
        data=res;
        console.log("Ma data", data);
        return data;
    }).catch(err => {
        console.log(err.error);
        return err;
    })
}

    

