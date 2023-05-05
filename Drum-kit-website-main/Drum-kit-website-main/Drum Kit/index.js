function playsound(clicked)
{
    sound(clicked);
}
document.addEventListener("keydown",function(event){

    sound(event.key);
});
function sound(music)
{
     
    switch(music)
    {
        case "c":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();  
            break;  
        case "a":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();  
            break;      
        case "n":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();  
            break;  
        case "d":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();  
            break;  
        case "h":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();  
            break;    
        case "u":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();  
            break;        
    }
}