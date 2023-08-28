const form = document.getElementById('form-value')
const campoA = document.getElementById('campo-a')
const campoB = document.getElementById('campo-b')

console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const mensagemSucesso = document.getElementById('mensagem-resposta')
    if (campoB.value > campoA. value) {
        alert("Parabens! o valor do B é maior que o valor do campo A")
    } else {
        alert('Tente novamente! o valor do campo B é menor que o valor de A!')
    }
})