/*function display() {
  var one= document.getElementsByClassName("in1")[0].value.trim();
  var two= document.getElementsByClassName("in2")[0].value.trim();
  var three= document.getElementsByClassName("in3")[0].value.trim();
  var four= document.getElementsByClassName("in4")[0].value.trim();
  var message=document.getElementById("message");

  var isValid = one !== "" && two !== "" && three !== "" && four !== "";


   
  if(!isValid){
   message.textcontent="invalid:please fill all the details";
   message.style.color="red";
  }
  else{
   message.textcontent="thanks for claiming our tutorial";
   message.text.color="green";
  }

   

}

/*function display(){
 var one= document.getElementsByClassName("in1")[0].value;
 var two= document.getElementsByClassName("in2")[0].value;
 var three= document.getElementsByClassName("in3")[0].value;
 var four= document.getElementsByClassName("in4")[0].value;
 var message=document.getElementById("message");
 if (one===""&&two===""&&three===""&&four===""){
     message.textContent="please enter the valid input";
     message.style.color="red"
 }
 else{
  message.textcontent="thanks for claiming our tutorial";
  
  message.text.color="green";
 }
}*/






//
  var first = document.getElementById("click");
  first.onclick = function() {
  var message = document.getElementById("message");

  // Select all input fields by their respective class names
  var inputs = [
      document.getElementsByClassName("in1")[0],
      document.getElementsByClassName("in2")[0],
      document.getElementsByClassName("in3")[0],
      document.getElementsByClassName("in4")[0]
  ];

  var isValid = true;

  // Loop through each input field and check if it is empty
  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
          isValid = false;
          break;
      }
  }

  if (!isValid) {
      message.textContent = "Invalid: Please fill all the details";
      message.style.color = "red";
  } else {
      message.textContent = "Thanks for claiming our tutorial";
      message.style.color = "green";
  }
}

