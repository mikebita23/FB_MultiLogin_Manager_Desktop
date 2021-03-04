const request = require('request-promise');
/**
 * @category API
 * @module user
 * @description manage the api call for users
 */


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
            url: `${__API_URL}/users/edit`,
            body: {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phoneNumber: userData.phoneNumber,
                passWord: userData.passWord,
                forfaitId: null
            },
            auth: {
                'bearer': __token
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

    getUser: () => {
        return request({
            method: 'POST',
            url: `${__API_URL}/users/get`,
            auth: {
                'bearer': __token
            },
            json: true
        })
    },
    
       
    
}
