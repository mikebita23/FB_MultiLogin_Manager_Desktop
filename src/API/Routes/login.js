const request = require('request-promise');

const API_URL = "http://api.infinite-scale.fr";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2lAbWlraS5jb20iLCJ1c2VySWQiOjE1MiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjEwMDIzMDMzLCJleHAiOjE2MTAwMjY2MzN9.eBSIQHt0Mmo_UwG4xwNSlLBxNVPkkU96-K8vGQ8eB4w"
}
module.exports = {

    connect: (email, password) => {
        console.log(email, password);
        return request({
            method: 'POST',
            url: `${API_URL}/Auth/login`,
            body: {
                email: email,
                passWord: password
            },
            json: true
         })//.then(res => {
        //     console.log("then : \n", res);
        //     // return res;
        // }).catch(err => {
        //     console.log("cath : \n", err.statusCode, err.error);
        //     return err;
        // })
    },
}