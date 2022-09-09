for (var index = 0; index < document.querySelectorAll("button").length; index++){
    document.querySelectorAll("button")[index].addEventListener("click",handleClick);
}
function handleClick(){
soundGenrator(this.innerHTML);
drumAnimation(this.innerHTML);
}
document.addEventListener("keypress",function(event){
  soundGenrator(event.key);
  drumAnimation(event.key);
})
function soundGenrator(element)
{
  switch (element) {
    case "w":
    var crash=new Audio("sounds/crash.mp3");
    crash.play();
      break;
    case "a":
    var kick=new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    case "s":
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "d":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "j":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "k":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "l":
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    default:console.log(element);
  }
}
function drumAnimation(element)
{document.querySelector("."+element).classList.add("pressed")
  setTimeout(function(){document.querySelector("."+element).classList.remove("pressed")},100)
}
