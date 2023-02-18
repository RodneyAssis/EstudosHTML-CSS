authForm.onsubmit = function (event) {
    event.preventDefault()

    if (authForm.logInLogOut.innerHTML == 'Acessar') {
        firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value).then(function (user) {
            console.log('O usuario entrou')
            console.log(user)
        }).catch(function (erro) {
            console.log('Falha ao acessar a conta')
            console.log(erro)
        })
    } else {
        firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value).then(function (user) {
            console.log('Cadastro efetuado')
            console.log(user)        
        }).catch(function (erro) {
            console.log('falha ao cadastrar usuario')
            console.log(erro)
        })
    }
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log('usuario autenticado')        
    } else {
        console.log('usuario não autenticado')
        
    }
    
})