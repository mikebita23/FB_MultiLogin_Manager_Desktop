// function validate() {
//     var phoneNumber = document.getElementById('phone-number').value;
//     var postalCode = document.getElementById('postal-code').value;
//     var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
//     var postalRGEX = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
//     var phoneResult = phoneRGEX.test(phoneNumber);
//     var postalResult = postalRGEX.test(postalCode);
//     if (phoneResult == false) {
//         alert('Please enter a valid phone number');
//         return false;
//     }

//     if (postalResult == false) {
//         alert('Please enter a valid postal number');
//         return false;
//     }

//     return true;
// }






function check_Password(inputPassword) {
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if (regex.test(inputPassword.inputConfirmPassword.value)) {
        return true;
        alert("Congrats! This is a valid Password R-Password");
    } else {
        alert("This is not a valid Password R-Password");
        return false;
    }
}








// (document).ready(function() {
//     $('#name').keyup(function() {
//         // var regexp = new RegExp(/^[a-aZ-Z]+$/);

//         var regexp = test = /^[a-zA-Z]+$/;
//         if (regexp.test($('#name').val)) {
//             $('#name').closeest('.formgroup').removeClass('has-error');
//             $('#name').closeest('.formgroup').addClass('has-sucess');
//         } else {
//             $('#name').closeest('.formgroup').removeClass('has-error');
//         }


//     })
// })




// (document).ready(function() {
//     $('#num').keyup(function() {
//         // var regexp = new RegExp(/^[a-aZ-Z]+$/);

//         var regexp = /^[0-9]{12}$/;
//         if (regexp.test($('#num').val)) {
//             $('#num').closeest('.formgroup').removeClass('has-error');
//             $('#num').closeest('.formgroup').addClass('has-sucess');
//         } else {
//             $('#num').closeest('.formgroup').removeClass('has-error');
//         }


//     })
// })



// (document).ready(function() {
//     $('#email').keyup(function() {
//         // var regexp = new RegExp(/^[a-aZ-Z]+$/);

//         var regexp = /^[a-zA-Z0-9._] + @ [a-zA-Z0-9._] +\. [a-zA-Z] {2,9}$/;
//         if (regexp.test($('#email').val)) {
//             $('#email').closeest('.formgroup').removeClass('has-error');
//             $('#email').closeest('.formgroup').addClass('has-sucess');
//         } else {
//             $('#email').closeest('.formgroup').removeClass('has-error');
//         }


//     })
// })



// (document).ready(function() {
//     $('#inputPassword').keyup(function() {
//         // var regexp = new RegExp(/^[a-aZ-Z]+$/);

//         var regexp = /^[a-zA-Z0-9] {6,75}$/;
//         if (regexp.test($('#inputPassword').val)) {
//             $('#inputPassword').closeest('.formgroup').removeClass('has-error');
//             $('#inputPassword').closeest('.formgroup').addClass('has-sucess');
//         } else {
//             $('#inputPassword').closeest('.formgroup').removeClass('has-error');
//         }


//     })
// })





// (document).ready(function() {
//     $('#pass2').keyup(function() {
//         // var regexp = new RegExp(/^[a-aZ-Z]+$/);

//         var regexp = /^[a-zA-Z0-9] {6,75}$/;
//         if (regexp.test($('#pass2').val())) {
//             if ($('#pass2').val() == $('#pass2').val()) {
//                 $('#pass2').closest('.form-control').removeClass('has-error');
//                 $('#pass2').closest('.form-control').addClass('has-success');
//             } else {
//                 $('#pass2').closest('.form-control').removeClass('has-error');
//             }
//         } else {
//             $('#pass2').closest('.form-control').removeClass('has-error');
//         }
//     })
// })