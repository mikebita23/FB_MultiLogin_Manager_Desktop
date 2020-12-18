const request = require('request-promise');

module.exports = {
    connect: (email, password) => {
        console.log(email, password);
        return request({
            method: 'POST',
            url: `${__API_URL}/Auth/login`,
            body: {
                email: email,
                passWord: password
            },
            json: true
        })
    },

    getProxy: _ => {
        return request({
            method: 'GET',
            url: `${__API_URL}/proxy/open`,
        })
    },

    closeProxy: port =>{
        return request({
            method: 'GET',
            url: `${__API_URL}/proxy/close/${port}`,
        })
    },

    createUser: (userData) => {
        return request({
            method: 'POST',
            url: `${__API_URL}/users/add`,
            body: {
                firstName : userData.firstName,
                lastName  : userData.lastName,
                email : userData.email,
                phoneNumber : userData.phoneNumber,
                passWord  : userData.passWord,
                role  : "CLIENT",
                forfaitId :null
            },
            json: true
        })
    }
}