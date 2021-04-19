var button = document.getElementsByTagName('button')[0];
var image = document.getElementsByTagName('img')[0];

window.afficher = function(){
  image.style.display = (image.style.display == "block") ? "none" : "block";
}
button.onclick = afficher;
