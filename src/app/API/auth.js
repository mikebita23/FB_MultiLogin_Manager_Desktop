const request = require('request-promise');
/**
 * @category API
 * @module auth
 * @description manage the api call for athentification
 */

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
}
