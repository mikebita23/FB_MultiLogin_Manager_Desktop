const request = require('request-promise');

const API_URL = "http://api.infinite-scale.fr";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2lAbWlraS5jb20iLCJ1c2VySWQiOjExLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTE4MjE4OTksImV4cCI6MTYxMTgyNTQ5OX0.UPf3faaOKaXrpeb2_EQB6o971XYOft-9V7XzdkBXfko"
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
