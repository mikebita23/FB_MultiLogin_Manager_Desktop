const request = require('request-promise');

const API_URL = "https://gls-login.herokuapp.com";
const API_Msg= "http://localhost:3004/"

module.exports = {
    connect: (email, password) => {
        console.log(email, password);
        return request({
            method: 'POST',
            url: `${API_URL}/Auth/login`,
            body: {
                email: email,
                passWord: password
            },
            json: true
        }).then(res =>{
            console.log("then : \n",res);
            return res;
        }).catch(err =>{
            console.log("cath : \n",err.statusCode, err.error);
            return err;
        })
    },
    createUser: (userData) => {
        return request({
            method: 'POST',
            url: `${API_URL}/users/add`,
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
        }).then(res =>{
            console.log(res);
            return res;
        }).catch(err =>{
            console.log(err.statusCode, err.error);
            return err;
        })
    },

    sendMessager: (userData) => {
        return request({
            method: 'POST',
            url: `${API_URL}/Msg/add`,
            body: {
                objet : userData.objet,
                contenu : userData.contenu,
                senderId : userData.senderId
               
            },
            json: true
        }).then(res =>{
            console.log(res);
            return res;
        }).catch(err =>{
            console.log(err.statusCode, err.error);
            return err;
        })
    }

}