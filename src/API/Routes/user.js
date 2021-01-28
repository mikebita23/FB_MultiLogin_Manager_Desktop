const request = require('request-promise');

const API_URL = "http://api.infinite-scale.fr";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2lhQG1pa2kuY29tIiwidXNlcklkIjo2LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MDk5MjQxMDYsImV4cCI6MTYwOTkyNzcwNn0.yFtGuaGyLPuy8go5pAbu0UWDPRZgIJCIkRwU8UJRriU"
}
module.exports = {
    // idUser= 
    addUser: (userData, callBack) => {
        return request({
            method: 'POST',
            url: `${API_URL}/users/add`,
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