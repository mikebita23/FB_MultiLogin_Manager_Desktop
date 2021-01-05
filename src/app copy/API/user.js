const request = require('request-promise');

const API_URL = "https://gls-login.herokuapp.com";
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imdsc0BnbHMuY29tIiwidXNlcklkIjozNiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjA5NzU0NTE0LCJleHAiOjE2MDk3NTgxMTR9.3ytip4SHuAEgpExEnMx4Mow2tdJVwnd4VShPzxUqf54"
}
module.exports = {
  // idUser= 
    updateUser: (idUser, userData, callBack) => {
        return request({
            method: 'PATCH',
            url: `${API_URL}/users/edit/${idUser}`,
            body: {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phoneNumber: userData.phoneNumber,
                passWord: userData.passWord,
                role: "CLIENT",
                forfaitId: null
            },
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
