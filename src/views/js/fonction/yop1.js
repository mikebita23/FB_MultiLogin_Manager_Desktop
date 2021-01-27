function validation() {
    var inputPassword = document.getElementsByTagName('inputPassword').value;
    var inputEmail = document.getElementsByTagName('inputEmail').value;

    var emailcheck = /^[A-Za-Z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;

    if (passwordcheck.test(inputPassword)) {
        document.getElementsByTagName('passworderror').innerHTML = "";
    } else {
        document.getElementsByTagName('passworderror').innerHTML = "**Password is not Matching";
        return false;
    }



    if (emailcheck.test(inputEmail)) {
        document.getElementsByTagName('emailerror').innerHTML = "";
    } else {
        document.getElementsByTagName('emailerror').innerHTML = "**Email is not Matching";
        return false;
    }
    }