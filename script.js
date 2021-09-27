function openNav() {
    document.getElementById(
        "myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById(
        "myNav").style.height = "0%";
}

// ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
// pattern="[0-9]{3}
// pattern="[a-zA-Z]+ *.[a-zA-Z]+{3,5}


var formValid = document.getElementById('bouton_envoi');
var prenom = document.getElementById('prenom');
var uncorrectPrenom = document.getElementById('uncorrectPrenom');
var uncorrectEmail = document.getElementById('uncorrectEmail');
var email = document.getElementById('email');
var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
// var emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

var message = document.getElementById('message');
var uncorrectMessage = document.getElementById('uncorrectMessage');

//A la perte du focus champ prenom, lancement de la fonction validaton
// formValid.addEventListener('click', validation);
prenom.addEventListener('blur', validationPrenom);
email.addEventListener('blur', validationEmail);
message.addEventListener('blur', validationMessage);



// function validation(event){
//     //Si le champ est vide
//     if (prenom.validity.valueMissing){
//         // event.preventDefault();
//         uncorrectPrenom.textContent = 'NOM Prénom manquant, veuillez remplir les champs.';
//         uncorrectPrenom.style.color = 'red';
//         prenom.style.border = '2px red solid';
//         // alert('NOM et Prénom manquant, veuillez remplir le champ demandé.'); 
//     //Si le format de données est incorrect
//     }else if (prenomValid.test(prenom.value) == false){
//         // event.preventDefault();
//         uncorrectPrenom.textContent = 'Format NOM Prenom incorrect, veuillez à nouveau saisir les champs.';
//         uncorrectPrenom.style.color = 'red';
//         prenom.style.border = '2px red solid';
//     }else if (emailValid.test(email.value) == false){
//         //Si le champ email est incorrect
//         uncorrectEmail.textContent = 'Email incorrect, veuillez à nouveau saisir les champs.';
//         uncorrectEmail.style.color = 'red';
//         email.style.border = '2px red solid';
//     }else if(email.validity.valueMissing){
//         //si champ email vide
//         uncorrectEmail.textContent = 'email manquant, veuillez remplir les champs.';
//         uncorrectEmail.style.color = 'red';
//         email.style.border = '2px red solid';
//     }else {
//     //Sinon le champ est correct afficher bodure verte
//     prenom.style.border = '2px green solid';
//     email.style.border = '2px green solid';
//     uncorrectPrenom.style.display = 'display: none';
//     uncorrectEmail.style.display = 'display: none';
//     // objectJavascript.style["border-right-color"]; 
//     }
// }


function validationEmail(event){
    var verificationLulla = document.getElementById("email").value;

    //Si le champ est vide
    if (email.validity.valueMissing){
        // event.preventDefault();
        uncorrectEmail.textContent = 'Veuillez renseigner votre Email.';
        uncorrectEmail.style.color = 'red';
        email.style.border = '2px red solid';
        // alert('Email manquant, veuillez remplir le champ demandé.'); 
    //Si le format de données est incorrect
    }else if (emailValid.test(email.value) == false){
        // event.preventDefault();
        uncorrectEmail.textContent = 'Email incorrect, veuillez à nouveau saisir le champ.';
        uncorrectEmail.style.color = 'red';
        email.style.border = '2px red solid';
    }
    // }else if (verificationLulla){

    //     uncorrectEmail.textContent = 'hello lul';

    // }
    else {
    //Sinon le champ est correct afficher bodure verte
        email.style.border = '2px green solid';
        // uncorrectEmail.style.display = 'display: none';
        uncorrectEmail.textContent ='' ;    

    }
}

function validationPrenom(event){
    //Si le champ est vide
    if (prenom.validity.valueMissing){
        // event.preventDefault();
        uncorrectPrenom.textContent = 'NOM et Prénom manquants, veuillez remplir le champ demandé.';
        uncorrectPrenom.style.color = 'red';
        prenom.style.border = '2px red solid';
        // alert('NOM et Prénom manquant, veuillez remplir le champ demandé.'); 
    //Si le format de données est incorrect
    }else if (prenomValid.test(prenom.value) == false){
        // event.preventDefault();
        uncorrectPrenom.textContent = 'Format NOM et Prenom incorrects, veuillez à nouveau saisir le champ demandé.';
        uncorrectPrenom.style.color = 'red';
        prenom.style.border = '2px red solid';
    }else {
    //Sinon le champ est correct afficher bodure verte
    prenom.style.border = '2px green solid';
    uncorrectPrenom.textContent ='' ;    
    }
}



function validationMessage(event){
    //Si le champ est vide
    if (message.validity.valueMissing){
        // event.preventDefault();
        uncorrectMessage.textContent = 'Veuillez écrire votre message.';
        uncorrectMessage.style.color = 'red';
        message.style.border = '2px red solid';
    //Si le format de données est incorrect
    }else {
    //Sinon le champ est correct afficher bodure verte
        message.style.border = '2px green solid';
        uncorrectMessage.style.display = 'display: none';
        uncorrectMessage.textContent ='' ;    
    }
}
