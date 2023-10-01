function carImagem(){
  document.getElementById("imagem").innerHTML="<img src='assets/jornalzinho.jpg'>";
}
/* abre e fecha o menu quando clicar no card e no icone x*/

const section = document.querySelector('#main card ')
const toggle = document.querySelectorAll('card .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do card,esconder o card*/
const links = document.querySelectorAll('main section nome Card card')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}