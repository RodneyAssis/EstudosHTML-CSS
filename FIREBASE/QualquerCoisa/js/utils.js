var authFormTitle = document.getElementById('authFormTitle')
var logInLogOut = document.getElementById('logInLogOut')
var register = document.getElementById('register')
var access = document.getElementById('access')

function toggleToRegister() {
    logInLogOut.innerHTML = 'Cadastrar'
    authFormTitle.innerHTML = 'Insirá seus dados para cadastrar sua conta'
    hiddeItem(register)
    showItem(access)
}

function toggleToAccess() {
    logInLogOut.innerHTML = 'Acessar'
    authFormTitle.innerHTML = 'Insira seus dados para acessar sua conta'
    hiddeItem(access)
    showItem(register)
    
}

function hiddeItem(element) {
    element.style.display = 'none'
}

function showItem(element) {
    element.style.display = 'block'
    
}