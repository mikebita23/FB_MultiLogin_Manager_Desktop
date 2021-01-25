/**
 * @category API
 * @module proxy
 * @description manage the api call for proxys 
 */

const request = require('request-promise');

module.exports = {
    /**
     * @function
     * @description fetch the proxy url from the API
     * @returns {Promise} request's promise
     */
    getProxy: () => {
        return request({
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${__token}`
            },
            url: `${__API_URL}/proxy/get`,
        })
    }
}