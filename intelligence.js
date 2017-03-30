function validateAnswer1(){
var getAnswer1 = document.getElementById("question1").value;

if(getAnswer1 == "reactive"){
    document.getElementById("question1").style.color = "green";
    document.getElementById("response1").innerHTML = "Correct!";

  } else {
    document.getElementById("question1").style.color = "red";
  }
  if(getAnswer1=="Reactive"){
    document.getElementById("question1").style.color = "green";
    document.getElementById("response1").innerHTML = "Correct!";
  }
  }
  function validateAnswer2(){
  var getAnswer2 = document.getElementById("question2").value;

    if(getAnswer2=="aligned"){
      document.getElementById("question2").style.color = "green";
      document.getElementById("response2").innerHTML = "Correct!";
    }
else{
      document.getElementById("question2").style.color = "red";
    }
if(getAnswer2=="Aligned"){
      document.getElementById("question2").style.color = "green";
      document.getElementById("response2").innerHTML = "Correct!";
    }
  }
function validateAnswer3(){
var getAnswer3 = document.getElementById("question3").value;

if (getAnswer3=="reviled"){
  document.getElementById("question3").style.color = "green";
  document.getElementById("response3").innerHTML = "Correct!";

}
else{
  document.getElementById("question3").style.color = "red";

}
if(getAnswer3=="Reviled"){
  document.getElementById("question3").style.color = "green";
  document.getElementById("response3").innerHTML = "Correct!";
}
  }
  function validateAnswer4(){
  var getAnswer4 = document.getElementById("question4").value;

  if (getAnswer4=="diaper"){
    document.getElementById("question4").style.color = "green";
    document.getElementById("response4").innerHTML = "Correct!";

  }
  else{
    document.getElementById("question4").style.color = "red";

  }
  if(getAnswer4=="Diaper"){
    document.getElementById("question4").style.color = "green";
    document.getElementById("response4").innerHTML = "Correct!";
  }
    }

// create class for colors for the border of the answer
//add or remove under the
