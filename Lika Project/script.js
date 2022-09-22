// const firstName = document.getElementById('firstname');
// const lastName = document.getElementById('lastname');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const confirmPassword = document.getElementById('confirm-password');
// const birthday = document.getElementById('birthday').value;
// const currency = document.getElementById('currency').value;
// const error = document.getElementById('error');
// const form = document.getElementById('form');
// const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/ ;

// form.addEventListener('submit', (e)=> {
//     e.preventDefault();

//     if(!firstName.value) {
//         alert('The name is required');
//         return;
//     } else if(!lastName.value) {
//         alert('The last name is required');
//         return;
//     } else if (!password.value) {
//         alert('Password is required');
//         return;
//     } else if (password.value.length < 6) {
//         alert('Minimum 6 characters');
//         return;
//     } else if (!confirmPassword.value) {
//         alert('Confirm the password');
//         return;
//     } else if (confirmPassword.value != password.value) {
//         alert('The passwords are not the same');
//         return;
//     } else {
//         alert('GOOD JOB');
//     }

// })



// const email = document.getElementById('email') ;
// const pattern = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
// const icon = document.getElementById('icon') ;

// function emailCheker () {
//     if(email.value.match(pattern)){
//         icon.style.display = "inline-block" ;
//         if(email.value.match(pattern)) {
//             icon.innerHTML = '<i class="fa fa-solid fa-check"></i>' ;
//         }
//         else if(email == "") {
//             icon.style.diplay = 'none' ;
//         }
//         else {
//             icon.innerHTML  = '<i class="fa fa-solid fa-exclamation"></i>'
//         }
//     }
// }



// Regex Pattern: /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/
let firstName = document.getElementById("firstname");
let firstNameSpan = document.getElementById("first-name-span");
let firstNameIcon = document.getElementById("firstname-icon");
let lastName = document.getElementById("lastname");
let lastNameIcon = document.getElementById("lastname-icon");
let lastNameSpan = document.getElementById("last-name-span");

let email = document.getElementById("email");
let icon = document.getElementById("icon");
let pattern = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
let span = document.getElementById("email-span");


function checker(){
    icon.style.display="inline-block";
    if(email.value.match(pattern)){
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';
        email.style.border = '2px solid #2ecc71';
        span.innerHTML = "Correct Email";
        span.style.color = '#2ecc71';
        
    }
       
    else if(email.value == ""){
        icon.style.display = 'none';
        email.style.border = '2px solid #d1d3d4';
        span.style.display = 'none';
        
    }

    else {
            icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
            icon.style.color = '#ff2851';
            email.style.border = '2px solid #ff2851';
            span.innerHTML = "Enter Coorect Email";
            span.style.color = '#ff2851';
        }
}
        

function usernameChecker() {
    if(firstName.value.length < 3 ) {
        firstNameIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        firstNameIcon.style.color = '#ff2851';
        firstNameSpan.innerHTML = 'Minimum 3 characters';
        firstNameSpan.style.color = '#ff2851' ;
        firstName.style.border = '2px solid #ff2851';
    } else {
        firstNameIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        firstNameIcon.style.color = '#2ecc71';
        firstName.style.border = '2px solid #2ecc71';
        firstNameSpan.innerHTML = "Correct Last Name";
        firstNameSpan.style.color = '#2ecc71';
       
    }
}


function lastNameChecker() {
    if(lastName .value.length < 6 ) {
        lastNameIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        lastNameIcon.style.color = '#ff2851';
        lastNameSpan.innerHTML = 'Minimum 6 characters';
        lastNameSpan.style.color = '#ff2851' ;
        lastName .style.border = '2px solid #ff2851';
    } else {
        lastNameIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        lastNameIcon.style.color = '#2ecc71';
        lastName .style.border = '2px solid #2ecc71';
        lastNameSpan.innerHTML = "Correct Email";
        lastNameSpan.style.color = '#2ecc71';
       
    }
}

function check(input, icon, span) {
    if(input.value.length < 6 ) {
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = '#ff2851';
        span.innerHTML = 'Minimum 6 characters';
        span.style.color = '#ff2851' ;
        input.style.border = '2px solid #ff2851';
    } else {
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';
        input.style.border = '2px solid #2ecc71';
        span.innerHTML = "Correct Email";
        span.style.color = '#2ecc71';
       
    }
}


// check(firstName , firstNameIcon ,firstNameSpan);












