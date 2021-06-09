var start=0;
var level=0;
var buttoncolors=["red", "blue", "green", "yellow"];
var gamepattern=[];
var userpattern=[];

// or use click function
$(".btn").on("click", function(){
       var idd=this.id;
    //    or use the below 
    //    var idd=$(this).attr("id");
    userpattern.push(idd);
    var audio=new Audio("sounds/"+idd+".mp3");
    audio.play();
    animatepress(idd);
    var k=check(userpattern.length-1);
   });
   function check(level){
      if(userpattern[level]===gamepattern[level]){
          console.log("success");
          if(gamepattern.length===userpattern.length){
            setTimeout(()=>{
                nextsequence();
            }, 1000);
          }
      }
      else{
          var audio=new Audio("sounds/wrong.mp3");
          audio.play();
          $("body").addClass("game-over");
          setTimeout(()=>{
              $("body").removeClass("game-over");
          }, 200);
          $("h1").text("Game Over, Press Any Key to Restart");
         startover();
      }
   }
   function startover(){
    level=0;
    start=0;
    gamepattern=[];
   }
   function animatepress(idd){
       $("#"+idd).addClass("pressed");
    //    setTimeout(function(){
    //     $("#"+idd).removeClass("pres sed");
    //    }, 100);
       setTimeout(() => {
        $("#"+idd).removeClass("pressed");
       }, 100);
    }
function nextsequence(){
    userpattern=[];
    level++;
    $("h1").text("Level "+level);
    var num=Math.floor(Math.random()*4);
    var randomchosen=buttoncolors[num];
    // $("#"+randomchosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#"+randomchosen).fadeOut(100).fadeIn(100);
    // or use below 
    // $("#" + randomchosen).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+randomchosen+".mp3");
    audio.play();
    gamepattern.push(randomchosen);
    
}
$(document).on("keydown", function(){
    if(start==0){
    nextsequence();
    start=1;
    var ans="it's started";
}
});

