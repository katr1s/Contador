let Number = document.querySelector(".number")
let buttom = document.querySelector(".buttom")
let Restart = document.querySelector(".restart")
let Contador = 0

Number.innerHTML= Contador

buttom.addEventListener('click', function(){
    Contador = Contador + 1
    Number.innerHTML= Contador
})

Restart.addEventListener('click', function(){
    Contador = 0
    Number.innerHTML= Contador
})