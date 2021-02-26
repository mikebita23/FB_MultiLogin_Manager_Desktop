const request = require('request-promise');
/**
 * @category API
 * @module session
 * @description manage the api call for sessions
 */


module.exports = {

    getSession: (id) => {
        return request({
            method: 'GET',
            url: `${__API_URL}/session/get/${id}`,
            headers: {
                'Authorization': `Bearer ${__token}`
            },
            json: true
        })
    },

    getSessions: (all) => {
        return request({
            method: 'GET',
            url: `${__API_URL}/session/get/all`,
            headers: {
                'Authorization': `Bearer ${__token}`
            },
            body: {
                allAccounts: all || flase
            },
            json: true
        })
    },

    save: (data) => {
        return request({
            method: 'POST',
            url: `${__API_URL}/session/add`,
            headers: {
                'Authorization': `Bearer ${__token}`
            },
            body: data,
            json: true
        })
    },

    update: (data) => {
        return request({
            method: 'PATCH',
            url: `${__API_URL}/session/edit/${data.id}`,
            headers: {
                'Authorization': `Bearer ${__token}`
            },
            body: data,
            json: true
        })
    },
    getSessionData: (id) => {
        request({
            method: 'GET',
            url: `${__API_URL}/session/getData/${id}`,
            headers: {
                'Authorization': `Bearer ${__token}`
            },
            encoding: null
        })
    }
}