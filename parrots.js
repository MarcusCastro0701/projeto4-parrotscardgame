
let controlador = 0;

let pensamento = prompt("Insira um número par de 4 a 14");

while (pensamento !== "4" && pensamento !== "6" && pensamento !== "8" && pensamento !== "10" && pensamento !== "12" && pensamento !== "14") {
    pensamento = prompt("Insira um número par de 4 a 14");
    }

if (pensamento === "4" || pensamento === "6" || pensamento === "8" || pensamento === "10" || pensamento === "12" || pensamento === "14"){
    const x = document.querySelector('.titulo')
    x.innerHTML = "jogo começou!!!!!!"
}

let pn = parseInt(pensamento)

let pnd = pn/2

let lista = [];

let passarinhos = ['./imagens/metalparrot.gif', './imagens/bobrossparrot.gif', './imagens/explodyparrot.gif', './imagens/fiestaparrot.gif', './imagens/revertitparrot.gif', './imagens/tripletsparrot.gif', './imagens/unicornparrot.gif'];

passarinhos.sort(comparador); 

function comparador() { 
	return Math.random() - 0.5; 
}

let passarinhoSelecionado = [];


function embaralhar(pnd){
  for(let i = 0; i < pnd; i++){
    let indice = Math.floor(passarinhos.length * Math.random())
    passarinhoSelecionado.push(passarinhos[indice])
    passarinhoSelecionado.push(passarinhos[indice])
    passarinhos.splice(indice, 1)
  }
}

let armazenamento;
let cs = 0;
let verificadora = document.querySelector('.verificadora')

function carregarCartinhas(pnd){
  embaralhar(pnd)
  for( let i = passarinhoSelecionado.length; i !== 0; i--){
    let indice = Math.floor(passarinhoSelecionado.length * Math.random())
    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('naoFuiClicada')
    card.setAttribute('onClick', 'transicao(this)')

    let primeiraDiv = document.createElement('div')
    primeiraDiv.classList.add('face')
    primeiraDiv.classList.add('frente')
    primeiraDiv.classList.add('analise-primeira')
    card.appendChild(primeiraDiv)

    let segundaDiv = document.createElement('div')
    segundaDiv.classList.add('face')
    segundaDiv.classList.add('back-face')
    segundaDiv.classList.add('analise-segunda')
    card.appendChild(segundaDiv)

    let imagemPadrao = document.createElement('img')
    imagemPadrao.setAttribute('src', './imagens/front.png')
    primeiraDiv.appendChild(imagemPadrao)

    let imagem = document.createElement('img')
    let imagemAleatoria = passarinhoSelecionado[indice]
    imagem.setAttribute('src', imagemAleatoria)
    segundaDiv.appendChild(imagem)
    armazenamento = imagemAleatoria;

    if(imagem.src === 'http://127.0.0.1:5500/Parrots/imagens/fiestaparrot.gif'){
      imagem.classList.add('verificacao-fiesta')
      card.classList.add('fiesta')
    }

    if(imagem.src === 'http://127.0.0.1:5500/Parrots/imagens/bobrossparrot.gif'){
      imagem.classList.add('verificacao-bobross')
      imagem.classList.add('bobrossimg')
      card.classList.add('bobross')
    }
    
    if(imagem.src === 'http://127.0.0.1:5500/Parrots/imagens/metalparrot.gif'){
      imagem.classList.add('verificacao-metal')
      imagem.classList.add('metalimg')
      card.classList.add('metal')
    }
    if(imagem.src === 'http://127.0.0.1:5500/Parrots/imagens/explodyparrot.gif'){
      imagem.classList.add('verificacao-explody')
      imagem.classList.add('explodyimg')
      card.classList.add('explody')
    }
    if(imagem.src === 'http://127.0.0.1:5500/Parrots/imagens/revertitparrot.gif'){
      imagem.classList.add('verificacao-revertit')
      imagem.classList.add('revertitimg')
      card.classList.add('revertit')
    }
    if(imagem.src === 'http://127.0.0.1:5500/Parrots/imagens/tripletsparrot.gif'){
      imagem.classList.add('verificacao-triplets')
      imagem.classList.add('tripletsimg')
      card.classList.add('triplets')
    }
    if(imagem.src === 'http://127.0.0.1:5500/Parrots/imagens/unicornparrot.gif'){
      imagem.classList.add('verificacao-unicorn')
      imagem.classList.add('unicornimg')
      card.classList.add('unicorn')
    }

    let div = document.querySelector('.cartinhas')
    div.appendChild(card)
    passarinhoSelecionado.splice(indice, 1)
  }

}

carregarCartinhas(pnd)

let ER = 0;

function transicao(fator){
  
  ER = ER + 1;
  fator.classList.remove('naoFuiClicada')
  frente = fator.children[0];
  verso = fator.children[1];
  const imagemVerso = verso.querySelector('img')
  imagemVerso.classList.remove('verificacao-fiesta')
  imagemVerso.classList.remove('verificacao-bobross')
  imagemVerso.classList.remove('verificacao-metal')
  imagemVerso.classList.remove('verificacao-explody')
  imagemVerso.classList.remove('verificacao-revertit')
  imagemVerso.classList.remove('verificacao-triplets')
  imagemVerso.classList.remove('verificacao-unicorn')
  frente.classList.add('front-face');
  verso.classList.remove('back-face');
  cs = cs + 1;
  if (cs === 2){
    setTimeout(virarDeNovo, 1000);
    cs = 0;
  }
  setTimeout(resetando, 2000);
}



function virarDeNovo(){
  const v1 = document.querySelector('.verificacao-fiesta')
  if(v1 !== null){
    
    for(let i = 0; i < 2; i++){
      const v11 = document.querySelectorAll('.fiesta')
      v11[0].classList.add('naoFuiClicada')
      v11[0].children[0].classList.remove('front-face');
      v11[0].children[1].classList.add('back-face');
      v11[0].children[1].querySelector('img').classList.add('verificacao-fiesta')
      v11[1].classList.add('naoFuiClicada')      
      v11[1].children[0].classList.remove('front-face');
      v11[1].children[1].classList.add('back-face');
      v11[1].children[1].querySelector('img').classList.add('verificacao-fiesta')
      
    }
  }

  const v2 = document.querySelector('.verificacao-bobross')
  if(v2 !== null){
    
    for(let i = 0; i < 2; i++){
      const v11 = document.querySelectorAll('.bobross')
      v11[0].classList.add('naoFuiClicada')     
      v11[0].children[0].classList.remove('front-face');
      v11[0].children[1].classList.add('back-face');
      v11[0].children[1].querySelector('img').classList.add('verificacao-bobross')
      v11[1].classList.add('naoFuiClicada')      
      v11[1].children[0].classList.remove('front-face');
      v11[1].children[1].classList.add('back-face');
      v11[1].children[1].querySelector('img').classList.add('verificacao-bobross')
      
    }
  }

  const v3 = document.querySelector('.verificacao-metal')
  if(v3 !== null){
    
    for(let i = 0; i < 2; i++){
      const v11 = document.querySelectorAll('.metal')
      v11[0].classList.add('naoFuiClicada')     
      v11[0].children[0].classList.remove('front-face');
      v11[0].children[1].classList.add('back-face');
      v11[0].children[1].querySelector('img').classList.add('verificacao-metal')
      v11[1].classList.add('naoFuiClicada')      
      v11[1].children[0].classList.remove('front-face');
      v11[1].children[1].classList.add('back-face');
      v11[1].children[1].querySelector('img').classList.add('verificacao-metal')
      
    }
  }

  const v4 = document.querySelector('.verificacao-explody')
  if(v4 !== null){
    
    for(let i = 0; i < 2; i++){
      const v11 = document.querySelectorAll('.explody')
      v11[0].classList.add('naoFuiClicada')      
      v11[0].children[0].classList.remove('front-face');
      v11[0].children[1].classList.add('back-face');
      v11[0].children[1].querySelector('img').classList.add('verificacao-explody')
      v11[1].classList.add('naoFuiClicada')     
      v11[1].children[0].classList.remove('front-face');
      v11[1].children[1].classList.add('back-face');
      v11[1].children[1].querySelector('img').classList.add('verificacao-explody')
      
    }
  }

  const v5 = document.querySelector('.verificacao-revertit')
  if(v5 !== null){
    
    for(let i = 0; i < 2; i++){
      const v11 = document.querySelectorAll('.revertit')
      v11[0].classList.add('naoFuiClicada')      
      v11[0].children[0].classList.remove('front-face');
      v11[0].children[1].classList.add('back-face');
      v11[0].children[1].querySelector('img').classList.add('verificacao-revertit')
      v11[1].classList.add('naoFuiClicada')      
      v11[1].children[0].classList.remove('front-face');
      v11[1].children[1].classList.add('back-face');
      v11[1].children[1].querySelector('img').classList.add('verificacao-revertit')
      
    }
  }

  const v6 = document.querySelector('.verificacao-triplets')
  if(v6 !== null){
    
    for(let i = 0; i < 2; i++){
      const v11 = document.querySelectorAll('.triplets')
      v11[0].classList.add('naoFuiClicada')      
      v11[0].children[0].classList.remove('front-face');
      v11[0].children[1].classList.add('back-face');
      v11[0].children[1].querySelector('img').classList.add('verificacao-triplets')
      v11[1].classList.add('naoFuiClicada')      
      v11[1].children[0].classList.remove('front-face');
      v11[1].children[1].classList.add('back-face');
      v11[1].children[1].querySelector('img').classList.add('verificacao-triplets')
      
    }
  }

  const v7 = document.querySelector('.verificacao-unicorn')
  if(v7 !== null){
    
    for(let i = 0; i < 2; i++){
      const v11 = document.querySelectorAll('.unicorn')
      v11[0].classList.add('naoFuiClicada')      
      v11[0].children[0].classList.remove('front-face');
      v11[0].children[1].classList.add('back-face');
      v11[0].children[1].querySelector('img').classList.add('verificacao-unicorn')
      v11[1].classList.add('naoFuiClicada')      
      v11[1].children[0].classList.remove('front-face');
      v11[1].children[1].classList.add('back-face');
      v11[1].children[1].querySelector('img').classList.add('verificacao-unicorn')
    }
  }
}


function resetando(){
  if(document.querySelector('.verificacao-metal') === null && document.querySelector('.verificacao-fiesta') === null && document.querySelector('.verificacao-bobross') === null && document.querySelector('.verificacao-unicorn') === null && document.querySelector('.verificacao-triplets') === null && document.querySelector('.verificacao-revertit') === null && document.querySelector('.verificacao-explody') === null){
    if(controlador === 0){
      const x = prompt(`Você terminou o jogo em ${ER/2} jogadas! Deseja jogar novamente?`)
      if (x === 'sim'){
        controlador++;
        location.reload()
      }
    }
    
  }
}
































        













      
