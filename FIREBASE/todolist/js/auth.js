//Traduz para português a autenticação do firebase
firebase.auth().languageCode = 'pt-BR'

autenticacao.onsubmit = function (event) {
    hiddeItem(loading)
    event.preventDefault()
    if (autenticacao.LoginCadastro.innerHTML == 'Acessar') {
        firebase.auth().signInWithEmailAndPassword(autenticacao.email.value, autenticacao.password.value).catch(function (erro) {
            console.log('Falha no acesso')
            console.log(erro)
            window.alert('Falha no Acesso')
        }) 
    } else {
        firebase.auth().createUserWithEmailAndPassword(autenticacao.email.value, autenticacao.password.value).catch(function (erro) {
            console.log('Falha no Cadastro')
            console.log(erro)
            
        })
    }
}

// Gerenciamento de estado de Autenticação

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        showUserContent(user)
    } else {
        showAuth()
    }
    
})

function signOut() {
 //Função que permite usuario a sair da conta
firebase.auth().signOut().catch(function (error) {
    console.log('Falha ao sair da conta')
    console.log(error)
})
}

// Verificar o mensagem verificação para o email do usuario
function sendEmailVerification() {
    var user = firebase.auth().currentUser
    user.sendEmailVerification(actionCodeSettings).then(function () {
      alert('E-mail de verificação foi enviado para ' + user.email + '! Verifique a sua caixa de entrada')
    }).catch(function (error) {
      alert('Houve um erro ao enviar o e-mail de verificação')
      console.log(error)
    })
  }
  