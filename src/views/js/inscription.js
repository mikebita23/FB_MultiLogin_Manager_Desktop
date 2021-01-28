const { ipcRenderer } = require('electron');
window.$ = window.jQuery = require("../../../node_modules/jquery/dist/jquery");

const emailRgex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
const nameRgex = /^[a-zA-Z]+$/
const phoneNumberRegex = /^0[0-9]{9}$/

function showError(element, err){
    element.next().val("Invalid format !")
}

$("#inscription").on("click", _ => {
    
    if(! emailRgex.test($("#inputEmail").val()) ){
        console.log("fuck you ");
        $("#inputEmail").next().text("Invalid format !")
        return
    } 
    if(! nameRgex.test($("#inputFirstName").val()) ){
        $("#inputFirstName").next().text("Invalid format !")
        return
    } 
    if(! nameRgex.test($("#inputLastName").val()) ){
        $("#inputLastName").next().text("Invalid format !")
        return
    } 
    if( $("#inputPhoneNumber").val() !== "" && !phoneNumberRegex.test($("#inputPhoneNumber").val())){
        $("#inputPhoneNumber").next().text("Invalid format !")
        return
    }
    if($("#inputPassword").val() != $("#inputConfirmPassword").val()){
        $("#inputConfirmPassword").next().text("Password doesn't match !")
        return
    }

    let user = {
        firstName : $("#inputFirstName").val(),
        lastName : $("#inputLastName").val(),
        email : $("#inputEmail").val(),
        passWord : $("#inputPassword").val()
    }

    if( $("#inputPhoneNumber").val() !== ""){
        if(phoneNumberRegex.test($("#inputPhoneNumber").val())){
            user.phoneNumber = $("#inputPhoneNumber").val()
        }else{
            $("#inputFirstName").next().val("Invalid format !")
            return
        } 
    }

    ipcRenderer.send('create-account', user)
})

ipcRenderer.on('create-account-reply', (e, auth) =>{
    console.log("auth : ",auth);
    if(auth) window.location.href= '../html/index.html';
})