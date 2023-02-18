var button = document.getElementById('button')
var register = document.getElementById('cadastro')


function toggleToCadastro() {
    hiddeItem(register)
    button.innerHTML = 'Criar Conta'
    
}


function hiddeItem(element) {
    element.style.display = 'none'
}