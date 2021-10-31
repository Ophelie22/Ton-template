//on selectionne notre bouton avec l'id
let button = document.querySelector('#mode');
//on selectionne notre span ici pas d'id ou de class
let span = document.querySelector('span');
//on va detecter le click de l'/utilisateur et on rajoute une fct anomyme


if(localStorage.getItem('theme')){
  if(localStorage.getItem('theme') == 'sombre') {
    modeSombre();
  }
}

button.addEventListener('click',() => {
//un tableau de ttes nos class ds l'element body; puis la conditions va m'envoyer vrai si 
//l'element body a bien une class dark
//MODE CLAIR
if(document.body.classList.contains('dark')) {
document.body.className = '' ;
span. textContent = 'Theme sombre';
// On va definir la prefede l'utilsateur en la stockant sur son navigateur
localStorage.setItem('theme','clair');
}
//autrement si mon  elemt body n'a pas de class Dark
//MODE SOMBRE
else{
  modeSombre ();
}
});
function modeSombre () {
  //je parametre ma class dark
document.body.className ='dark';
span.textContent = 'Thème clair';
localStorage.setItem('theme', 'sombre');

}