const request = require('request-promise');

module.exports = {
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