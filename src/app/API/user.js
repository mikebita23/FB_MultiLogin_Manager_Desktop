const request = require('request-promise');

const API_URL = "https://gls-login.herokuapp.com";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmFAaWJyYS5jb20iLCJ1c2VySWQiOjQxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTAwMjUwNzMsImV4cCI6MTYxMDAyODY3M30.Xu_lxtv_jZQGZSRqvKvTrFOVUSspvyO6q-OIedrBJ6s"
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
