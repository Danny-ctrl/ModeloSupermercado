function carImagem(id,imageUrl){
  const imagem=document.getElementById(id);
  imagem.style.backgroundImage = `url('${imageUrl}')`;
  imagem.classList.add('imagem-fullscreen');/* adiciona a classe de estilo*/

}
/*document.addEventListener('DOMContentLoaded', function() {
carImagem('imagem1', 'assets/jornalzinho1.jpg');
carImagem('imagem2', 'assets/jornalzinho2.jpg');
carImagem('imagem3', 'assets/jornalzinho3.jpg');
carImagem('imagem4', 'assets/jornalzinho4.jpg');

});*/



/* abre e fecha o menu quando clicar no card e no icone x*/

const section = document.querySelector('#main .Card ')
const toggle = document.querySelectorAll('.cardunico .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    section.classList.toggle('show')
  })
}

/*quando clicar em um item do card,esconder o card*/
const links = document.querySelectorAll('#main section .nome .Card .card')

for (const link of links) {
  link.addEventListener('click', function () {
    section.classList.remove('show')
  })
}