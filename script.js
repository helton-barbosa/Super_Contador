function contar(){
   let i = window.document.querySelector('input#contInicio')
   let f = window.document.querySelector('input#contFim')
   let p = window.document.querySelector('input#passo')
   let r = window.document.querySelector('p#resultado')
   
   if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
      window.alert("[ERRO] Insira todos os dados!")
   } else {
      let inicio = Number(i.value)
      let fim = Number(f.value)
      let passo = Number(p.value)

      if(passo == 0){
         window.alert("Passo inválido! Considerando passo 1")
         passo = 1
      }

      if(inicio < fim){
         r.innerHTML = ""
         r.innerHTML = `Contando progressivamente: <br> \u{1F6A9}`
         for(let c = inicio; c <= fim; c += passo){
            r.innerHTML += `${c} \u{1F449}`
         }
      }else{
         r.innerHTML = ""
         r.innerHTML = `Contando regressivamente: <br> \u{1F6A9}`
         for(let c1 = inicio; c1 >= fim; c1 -= passo){
            r.innerHTML += `${c1} \u{1F449}`
         }
      }
      r.innerHTML += `\u{1F3C1}`
   }
}