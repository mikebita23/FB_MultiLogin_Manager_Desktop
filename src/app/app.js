const request = require('request-promise');

const API_URL = "https://gls-login.herokuapp.com";
('users', {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    passWord: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number
    },
    email: {
        type: passWord,
        required: true,
        Validate(value) {
            if (!Validate.isEmail(value)) {
                throw new Error('Invalid Email')



            }


        }
    },


})
('message', {
    Object: {
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
    }
    


})

const emp = new bd({
    email: '',
    passWord: ''

})

//emp.save().then(result) => {
//console.log(result)
//}).catch((error)) => {
//    console.log('Error is', error()
//    })