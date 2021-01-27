const request = require('request-promise');

const API_URL = "http://api.infinite-scale.fr";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6ZXJ0eUBnbWFpbC5jb20iLCJ1c2VySWQiOjUsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTE3NDA2MTEsImV4cCI6MTYxMTc0NDIxMX0.4Ah_hnlccvT-6PhnWyZC8qCNXbPMcpqyXii7f5yiHYg"
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
