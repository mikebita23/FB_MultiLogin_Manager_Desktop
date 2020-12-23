const request = require('request-promise');

const API_URL = "https://gls-login.herokuapp.com";

('message', {
    Objet: {
        type: String,
        required: true,
    },
    Content: {
        type: String,
        required: true,
    },
    senderId: {
        type: Integer,
        required: true,
    },
  

})
