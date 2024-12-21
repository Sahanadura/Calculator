let percentage=document.getElementById("percentage");
let division=document.getElementById("division");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let multiplication=document.getElementById("multiplication");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let subtraction=document.getElementById("subtraction");
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let addition=document.getElementById("addition");
let double_zero=document.getElementById("double-zero");
let zero=document.getElementById("zero");
let dot=document.getElementById("dot");
let equalto=document.getElementById("equalto");
let boxes=document.querySelectorAll(".box");
let space=document.querySelector(".space");
let ac=document.getElementById("delete");
let bs=document.getElementById("backspace");
let numbers=document.querySelectorAll(".number");
let symbols=document.querySelectorAll(".symbol");
let inputdisplay=document.getElementById("inputdisplay");
let outputdisplay=document.getElementById("outputdisplay");

let evaluated=false;
let text="";
let lastExpression="";

function updateDisplay(){
    inputdisplay.innerHTML=text;
}
//seven.addEventListener("click",()=>{
 //  text=text+seven.innerText;
   //document.querySelector(".space").innerHTML=text;
 //  updateDisplay();
//});

numbers.forEach(number=>{
number.addEventListener("mouseover",()=>{
    number.style.backgroundColor="rgb(76, 75, 75)";
});
number.addEventListener("mouseout",()=>{
   number.style.backgroundColor="grey";
});
});
symbols.forEach(symbol=>{
   symbol.addEventListener("mouseover",()=>{
       symbol.style.backgroundColor="grey";
   });
   symbol.addEventListener("mouseout",()=>{
      symbol.style.backgroundColor="rgb(76, 75, 75)";
   });
   });

   
      equalto.addEventListener("mouseover",()=>{
          equalto.style.backgroundColor="#c57f57";
      });

      equalto.addEventListener("mouseout",()=>{
         equalto.style.backgroundColor="#9e6341";
      });
        



//eight.addEventListener("click",()=>{
  //  text=text+eight.innerText;
    //document.querySelector(".space").innerHTML=text;
    //updateDisplay();
 //});
 //nine.addEventListener("click",()=>{
    //text=text+nine.innerText;
   // document.querySelector(".space").innerHTML=text;
   //updateDisplay();
 //});
 //four.addEventListener("click",()=>{
   // text += four.innerText;
   // document.querySelector(".space").innerHTML=text;
   //updateDisplay();
 //});
// five.addEventListener("click",()=>{
  //  text += five.innerText;
    //document.querySelector(".space").innerHTML=text;
  //  updateDisplay();
// });
 //six.addEventListener("click",()=>{
  //  text += six.innerText;
    //document.querySelector(".space").innerHTML=text;
  //  updateDisplay();
// });
// one.addEventListener("click",()=>{
  //  text += one.innerText;
    //document.querySelector(".space").innerHTML=text;
   // updateDisplay();
 //});
 //two.addEventListener("click",()=>{
  //  text += two.innerText;
    //document.querySelector(".space").innerHTML=text;
 //   updateDisplay();
 //});
 //three.addEventListener("click",()=>{
   // text += three.innerText;
    //document.querySelector(".space").innerHTML=text;
    //updateDisplay();
 //});
 //double_zero.addEventListener("click",()=>{
   // text += double_zero.innerText;
    //document.querySelector(".space").innerHTML=text;
   // updateDisplay();
 //});
 //zero.addEventListener("click",()=>{
  //  text += zero.innerText;
    //document.querySelector(".space").innerHTML=text;
    //updateDisplay();
 //});

 percentage.addEventListener("click",()=>{
    text += percentage.innerText;
    //document.querySelector(".space").innerHTML=text;
    updateDisplay();
 });
 division.addEventListener("click",()=>{
    text += division.innerText;
   // document.querySelector(".space").innerHTML=text;
   updateDisplay();
 });
 multiplication.addEventListener("click",()=>{
    text += multiplication.innerText;
    //document.querySelector(".space").innerHTML=text;
    updateDisplay();

 });
 subtraction.addEventListener("click",()=>{
    text += subtraction.innerText;
    //document.querySelector(".space").innerHTML=text;
    updateDisplay();
 });
 addition.addEventListener("click",()=>{
    text += addition.innerText;
   // document.querySelector(".space").innerHTML=text;
   updateDisplay();
 });
 dot.addEventListener("click",()=>{
    text += dot.innerText;
    //document.querySelector(".space").innerHTML=text;
    updateDisplay();
 });


 
 equalto.addEventListener("click",()=>{   
   // let result=eval(text);
   // text+=result;
   // document.querySelector("#inputdisplay").innerText=text;
   updateDisplay();
    try{
    let result = eval(text);
    outputdisplay.innerText=result;
    
    outputdisplay.style.fontSize="2.5rem";
    lastExpression=text;
    text=result.toString();
    evaluated=true;
    
   }
   catch(error){
     // text+="Error";
     //document.querySelector("#inputdisplay").innerText = text;
     outputdisplay.innerText = "Error";
      text="";
      //updateDisplay();
   }
 });

 ac.addEventListener("click",()=>{
     text="";
     inputdisplay.innerText="";
     outputdisplay.innerText="";
     evaluated=false;
    // document.querySelector(".space").innerHTML=text;
 });
 
 bs.addEventListener("click",()=>{
   if(!evaluated){
      text=text.slice(0,-1);
      if(text==""){
         outputdisplay.innerText="";
         inputdisplay.innerText="";
      }
      else{
      updateDisplay();
      }
      
   }
   else{
      lastExpression=lastExpression.slice(0,-1);
      text=lastExpression;
      if (text === "") {// Clear the input display
         outputdisplay.innerText = "";
         inputdisplay.innerText="";
      }
         else{
      updateDisplay();
         }

         
   }
   
 });

 numbers.forEach(number=>{
   number.addEventListener("click",()=>{
   if(evaluated){
      text="";
      updateDisplay();
   }
   evaluated=false;
   text+=number.innerText;
   updateDisplay();
});
});