const request = require('request-promise');

const API_URL = "https://gls-login.herokuapp.com";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imdsc0BnbHMuY29tIiwidXNlcklkIjozNiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjA5ODU4NDA0LCJleHAiOjE2MDk4NjIwMDR9._KOazNWm4e4y2Ff7QRnWk35Y9pyoPGXjQBxfB5g2Ydw"
}
module.exports = {
  // idUser= 
    updateUser: (userData, callBack) => {
        return request({
            method: 'POST',
            url: `${API_URL}/users/edit`,
            body: {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phoneNumber: userData.phoneNumber,
                passWord: userData.passWord,
                role: "CLIENT",
                forfaitId: null
            },
            auth: Auth,
            json: true
        }).then(res => {
            console.log(res);
            return res;
        }).catch(err => {
            console.log(err.statusCode, err.error);
            return err;
        })
    },
    getUser: (idUser, callBack) => {
        return request({
            method: 'GET',
            url: `${API_URL}/users/get/${idUser}`,
            auth: Auth,
            json: true
        }).then(res => {
            console.log(res);
            return res;
        }).catch(err => {
            console.log(err.statusCode, err.error);
            return err;
        })
    },
    
       
    
}
