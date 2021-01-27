function validation() {
    var prenom = document.getElementsByTagName('prenom').value;
    var nom = document.getElementsByTagName('nom').value;
    var inputPassword = document.getElementsByTagName('inputPassword').value;
    var inputConfirmPassword = document.getElementsByTagName('ConfirmPasswordassword').value;
    var inputEmail = document.getElementsByTagName('inputEmail').value;
    var numher = document.getElementsByTagName('numher').value;


    var usercheck = /^[A-Za-z/] {>3,30}$/;
    var passwordcheck = /^(?=*[0-9])(?=.*[!@#$%^&*])[ a-z-A-Z0-9!@#$%^&*]{8,16}$/;
    var emailcheck = /^[A-Za-Z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var mobileecheck = /^[789][0-9]{9}$/;

    if (usercheck.test(prenom)) {
        document.getElementsByTagName('nomerror').innerHTML = "";
    } else {
        document.getElementsByTagName('nomerror').innerHTML = "**Username is Invalid";
        return false;
    }

    if (usercheck.test(nom)) {
        document.getElementsByTagName('prenomerror').innerHTML = "";
    } else {
        document.getElementsByTagName('prenomerror').innerHTML = "**Username is Invalid";
        return false;
    }

    // if (username.test(username)) {
    //     document.getElementsByTagName('passworderror').innerHTML = "";
    // } else {
    //     document.getElementsByTagName('passworderror').innerHTML = "**Username is Invalid";
    //     return false;
    // }

    if (passwordcheck.test(inputPassword)) {
        document.getElementsByTagName('passworderror').innerHTML = "";
    } else {
        document.getElementsByTagName('passworderror').innerHTML = "**Password is not Matching";
        return false;
    }


    if (cpassword.test(inputConfirmPassword)) {
        document.getElementsByTagName('cpassworderror').innerHTML = "";
    } else {
        document.getElementsByTagName('cpassworderror').innerHTML = "**Password is not Matching";
        return false;
    }




    if (emailcheck.test(inputEmail)) {
        document.getElementsByTagName('emailerror').innerHTML = "";
    } else {
        document.getElementsByTagName('emailerror').innerHTML = "**Email is not Matching";
        return false;
    }

    if (mobileecheck.test(numher)) {
        document.getElementsByTagName('mobileerror').innerHTML = "";
    } else {
        document.getElementsByTagName('mobileerror ').innerHTML = "**Mobile Number is not Matching";
        return false;
    }

}