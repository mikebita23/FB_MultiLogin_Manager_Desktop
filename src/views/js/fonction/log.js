function validateForm() {
    var u = document.getElementById("inputEmail").value;
    var p = document.getElementById("inputPassword").value;

    if (u == "") {
        alert("Please enter your Mail");
        return false;
    }
    if (p == "") {
        alert("Please enter you Password");
        return false;
    }

    alert("All datas are valid!, send it to the server!")

    return true;
}