const option1 = document.getElementById("op1")
     const option2 = document.getElementById("op2")
    const  option3 = document.getElementById("op3")
    const  audio = document.getElementById("audio"); 
var answer = 0;

function generate_equation(){ 
  var num1 = Math.floor(Math.random() * 13)
    var  num2 = Math.floor(Math.random() * 13)
     var wrong1 = Math.floor(Math.random() * 50)
     var wrong2 = Math.floor(Math.random() * 50)
     var allAnswers = []
     var changeAnswers = [];

  answer = eval(num1 * num2);
  
  document.getElementById("num1").innerHTML = num1; 
  document.getElementById("num2").innerHTML = num2; 

  allAnswers = [answer, wrong1, wrong2];
//  [answer, wrong1, wrong2],  start with idx 2 and end with idx 0 but length equal 3 
  // الفكره انه طول المصفوفة هو 3 ولكن الفهرس يبداء من الرقم 0 ونهايته 2 لذالك يجب طرح 1 من طول المصفوفة
  // for (var i = allAnswers.length-1; i>=0; i--){
  //   changeAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  // 1- loop in allAnswers array 
  // 2- chooce random element 
  // 3- push that elemnt into new array 
  // 4- remove that  elemnet from allAnsers array

  let size = allAnswers.length 
  for(let i = 0 ; i < size; i++){
   let randomIdx = Math.floor( Math.random() * allAnswers.length)
   changeAnswers.push(allAnswers[randomIdx])
   allAnswers.splice(randomIdx,1)
  }
  

  option1.innerHTML = changeAnswers[0];
  option2.innerHTML = changeAnswers[1];
  option3.innerHTML = changeAnswers[2]; 

};

option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
      generate_equation();
    }
    else{
      audio.play();
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
      generate_equation();
    }
    else{
      audio.play();
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
     generate_equation();
    }
    else{
      audio.play();
    }
});

generate_equation()


