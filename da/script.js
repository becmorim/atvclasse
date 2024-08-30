const paragrafo1 = document.getElementById("paragrafo1")
const paragrafo2 = document.getElementsByClassName("paragrafo2")[0]
const botao = document.getElementById("botao")
const link = documnet.getElementById('link')
const imagem = document.getElementById('imagem')
const botaoImagem = document.getElementById('botaoImagem')

link.setAttribute('href', 'https://www.petlove.com.br')
link.textContent = 'Visitar a petlove'
link.style.color = 'red'
link.style.fontWeight = "bold"

var imagemAtual = 1

botaoImagem.addEventListener('click', function(){
    if(imagemAtual === 1) {
        imagem.setAttribute('src', 'img2.jpg')
        imagemAtual = 2
    }else{
        imagem.setAttribute('src', 'img1.jpg')
        imagemAtual = 1
    }
})

imagem.style.width = '600px'
imagem.style.height = '500px'
imagem.style.objectFit = 'cover'
imagem.style.borderRadius = '30px'