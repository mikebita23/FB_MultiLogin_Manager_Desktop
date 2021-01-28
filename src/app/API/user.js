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
}