
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation =  document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();
   
    checkInputUsername();
})


function checkInputUsername(){
    const usernameValue = username.value;

    console.log(usernameValue)
}
if(usernameValue) === ""){
erroInput(username, "Preencha um username!")
}else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
}


function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
 }else{
    const formItem = email.parentElement;
    formItem.className= "form-content"
 }

}


function checkInputPasswordConfirmation (){
    const passwordValue = password.value;


    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatória.")
    }else if(passwordValue.length < 8){

        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}



function erroInput(input,message){
const formItem = input.parentElement;
const textMessage = formItem. querySelector("a")

textMessage.innerText = message;

formItem.className = "form-content error"
}