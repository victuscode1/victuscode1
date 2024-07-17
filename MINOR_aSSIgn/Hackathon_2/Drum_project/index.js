// // alert("Hello brpther");
// document.querySelector("button").addEventListener("click",buttonClick); 
// /*  

// addEventLsterner - > adds the event

// */

// function buttonClick(){
//     alert("I got clicked!");
// }


// alert("Hello brpther");
// for(var i = 0 ;i < document.querySelector(".drum").length;i++){
   
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("I got clicked!");
//     });

// }
// mourse-click
for(let i = 0 ; i < document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     //alert("I got clicked!");
    // this.style.color = "white";
    let innerHtml = this.innerHTML;
    makeSound(innerHtml)
    buttonAnimation(innerHtml);

    });
}


// var audio = new Audio("sounds/tom-1.mp3");
//      audio.play();

// key-press
document.addEventListener("keypress",function(event){
  makeSound(event.key)
  buttonAnimation(event.key)
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                
                break;
           
        
            case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            
            break;
     
            case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            
            break;

            case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            
            break;
            case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            
            break;
          
             case "l":
             var kick = new Audio("sounds/kick-bass.mp3");
             kick.play();    
             break;
        
        
        
        
                    default:
                        console.log("Default Case");
            break;
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
    
}




// document.querySelectorAll("button")[0].addEventListener("click",function buttonClick(){
//     alert("I got clicked!");
// });   
//  document.querySelectorAll("button")[1].addEventListener("click",function buttonClick(){
//      alert("I got clicked!");
//  }); 
//  document.querySelectorAll("button")[2].addEventListener("click",function buttonClick(){
//      alert("I got clicked!");
//  }); 
//  document.querySelectorAll("button")[3].addEventListener("click",function buttonClick(){
//      alert("I got clicked!");
//  }); 
//  document.querySelectorAll("button")[4].addEventListener("click",function buttonClick(){
//      alert("I got clicked!");
//  }); 
//  document.querySelectorAll("button")[5].addEventListener("click",function buttonClick(){
//      alert("I got clicked!");
//  }); 
//  document.querySelectorAll("button")[6].addEventListener("click",function buttonClick(){
//     alert("I got clicked!");
//  }); 
  

// addEventLsterner - > adds the event



