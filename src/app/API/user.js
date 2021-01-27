const request = require('request-promise');

const API_URL = "http://api.infinite-scale.fr";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlAZ21haWwuY29tIiwidXNlcklkIjoxMCwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTYxMTc2MzI0MCwiZXhwIjoxNjExNzY2ODQwfQ.ecb0QtKd-gRDXETk7mrnJ9xyFidRAnaPkpIGrVs2XJg"
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
