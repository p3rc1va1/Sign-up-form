const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const submit = document.getElementById("submit")

confirmPassword.addEventListener("input", function(){
    if(password.value==""||password.checkValidity() == false){
        confirmPassword.value = "";
    }
    if(confirmPassword.value!=password.value){
        confirmPassword.setCustomValidity("Passwords do not match!");
    }else{
        confirmPassword.setCustomValidity("");
    }
});

// while(true){
//     if(password.checkValidity() &&
//        confirmPassword.checkValidity() &&
//        firstName.checkValidity() &&
//        lastName.checkValidity() && 
//        email.checkValidity() &&
//        tel.checkValidity()
//     ){
//         submit.style.color(rgba(0,128,0,0.2))
//     }
// }