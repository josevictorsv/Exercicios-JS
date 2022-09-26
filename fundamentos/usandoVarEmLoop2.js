const funcs = []   //array vazio

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()  //problema comum faz sair 10 ao inves de valor do i no momento