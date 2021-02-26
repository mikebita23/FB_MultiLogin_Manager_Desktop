/**
 * @category API
 * @module file
 * @description manage the api call for files 
 */

const request = require('request-promise');
const fs = require('fs')

module.exports = {
    /**
     * @function
     * @param {String} Dir directory the file
     * @description send POST request containing the file
     * @returns {Promise} request's promise
     */
    uploadFile: (Dir, name) => {
        return request({
            method: 'POST',
            url: `${__API_URL}/file/upload/${name}`,
            headers: {
                'Authorization': `Bearer ${__token}`,
                'Content-Type': 'multipart/form-data; charset=UTF-8'
            },
            formData: {
                file:   fs.createReadStream(Dir)
            }
        })
    },

    downloadFile: (id)=> {
        return request({
            method: 'GET',
            url: `${__API_URL}/file/getSession/${id}`,
            headers: {
                'Authorization': `Bearer ${__token}`,
            }
        })
    }
}