const request = require('request-promise');

const API_URL = "http://api.infinite-scale.fr";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdmlkQGdtYWlsLmNvbSIsInVzZXJJZCI6OSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjExODQyMDY4LCJleHAiOjE2MTE4NDU2Njh9.Bzr4XQx_j7zTNoPsixC4zqXFwTIylmJWUTFe1nQsK08"
}
module.exports = {
    signUp: (user) => {
        return request({
            method: 'POST',
            url: `${__API_URL}/users/add`,
            body: user,
            json: true
        })
    },
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
                role: "ADMIN",
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
    getUser: () => {
        return request({
            method: 'POST',
            url: `${API_URL}/users/get`,
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
