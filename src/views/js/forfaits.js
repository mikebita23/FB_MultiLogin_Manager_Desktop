window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");
const request = require('request-promise');
const API_URL1 = "http://api.infinite-scale.fr";
const apiUsers = "http://api.infinite-scale.fr/users/all"

const Auth1 = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6ZXJ0eUBnbWFpbC5jb20iLCJ1c2VySWQiOjUsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxMDk2MDA0MCwiZXhwIjoxNjEwOTYzNjQwfQ.e0J4yc1T5YAmNiZyVyAgvS92EP3_LjiPKSLlFh0xeCM"
}

var data;


function getData() {
    return request({
        method: 'GET',
        url: `${API_URL1}/users/all`,
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


$('#dataF').on('click', _ =>{
getData();  
})
    

