var autenticacao = document.getElementById('autenticacao')
var authtitle = document.getElementById('authTitle')
var register = document.getElementById('registro')
var access = document.getElementById('acesso')

var loading = document.getElementById('loading')

var usernoAuth = document.getElementById('auth')
var user_content = document.getElementById("userContent")

var EmailVerified = document.getElementById('EmailVerified')
var sendEmailVerificationDiv = document.getElementById("sendEmailVerificationDiv")

var requestPassword = document.getElementById('solicitarSenha')

function toggleToRegister() {
    //Fazendo autentificação sem variavel do botão definida    autenticacao.LoginCadastro.innerHTML = 'cadastrar conta'
    autenticacao.LoginCadastro.innerHTML = 'Cadastrar conta'
    authtitle.innerHTML = 'Insira seus dados para cadastrar'
    showItem(access)
    hiddeItem(requestPassword)
    hiddeItem(register)
}

function toggleToAccess() {
    autenticacao.LoginCadastro.innerHTML = 'Acessar'
    authtitle.innerHTML = 'Acesse a sua conta para continuar'

    showItem(register)
    hiddeItem(access)
    showItem(requestPassword)
}

function showItem(element) {
    element.style.display = 'block'
    
}

function hiddeItem(element) {
    element.style.display = 'none'    
}

// Funcão direcionada para exibir informações para usuarios autenticados
function showUserContent(user) {
    console.log(user)
    if (user.emailVerified == true) {
        EmailVerified.innerHTML = "Email verificado"
        hiddeItem(sendEmailVerificationDiv)
    }
    else {
        EmailVerified.innerHTML = 'Email não verificado'
        showItem(sendEmailVerificationDiv)
    }
    userEmail.innerHTML = user.email
    showItem(user_content)
    hiddeItem(usernoAuth)
}

// Funcão direcionada para exibir informações para usuarios não autenticados
function showAuth() {
    autenticacao.email.value = ''
    autenticacao.password.value = ''
    showItem(usernoAuth)
    hiddeItem(user_content)
}

//Atribustos extras de configurações de e-mail

var actionCodeSettings = {
    url: 'http://127.0.0.1:5500/todolist/html/index.html'
    
}