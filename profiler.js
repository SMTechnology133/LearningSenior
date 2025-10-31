//modal code
$(document).ready(function() 
{ 
$("#myModal").modal('hide'); 
}); 

//_______________________________

//popover  code
$(function(){
$('[data-toggle="popover"]').popover ()
})

//_______________________________

//tooltip code
$(function(){
$('[data-toggle="tooltip"]').tooltip()
})

//_______________________________

//custom alert box script
  function showAlert(message) {
    document.getElementById("alertMessage").textContent = message;
    document.getElementById("customAlert").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    // Play the alert sound
    const sound = document.getElementById("alertSound");
    sound.currentTime = 0;
    sound.play();
  }

  function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
//end custom alert box script

//_______________________________

//toggle question code 1
$(document).ready(function() 
{ 

$("#shbtn0").click(function() 
{ 

$("#d0").toggle(); 

}); 

}); 

//_______________________________


//toggle question code 1
$(document).ready(function() 
{ 

$("#shbtn1").click(function() 
{ 

$("#d1").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 2
$(document).ready(function() 
{ 

$("#shbtn2").click(function() 
{ 

$("#d2").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 3
$(document).ready(function() 
{ 

$("#shbtn3").click(function() 
{ 

$("#d3").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 4
$(document).ready(function() 
{ 

$("#shbtn4").click(function() 
{ 

$("#d4").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 5
$(document).ready(function() 
{ 

$("#shbtn5").click(function() 
{ 

$("#d5").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 6
$(document).ready(function() 
{ 

$("#shbtn6").click(function() 
{ 

$("#d6").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 7
$(document).ready(function() 
{ 

$("#shbtn7").click(function() 
{ 

$("#d7").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 8
$(document).ready(function() 
{ 

$("#shbtn8").click(function() 
{ 

$("#d8").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 9
$(document).ready(function() 
{ 

$("#shbtn9").click(function() 
{ 

$("#d9").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 10
$(document).ready(function() 
{ 

$("#shbtn10").click(function() 
{ 

$("#d10").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 11
$(document).ready(function() 
{ 

$("#shbtn11").click(function() 
{ 

$("#d11").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 12
$(document).ready(function() 
{ 

$("#shbtn12").click(function() 
{ 

$("#d12").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 13
$(document).ready(function() 
{ 

$("#shbtn13").click(function() 
{ 

$("#d13").toggle(); 

}); 

}); 

//_______________________________

$(document).ready(function(){
$("h5").animate({
color: "teal"
});
});

//_______________________________

$(document).ready (function(){
$("img").attr("loading", "lazy");
});

//_______________________________

//speech module profiler component 
//speech 0
function profiler0() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance("This user interface component is easy to use, created mobile phone first you can edit and run it on your smart phone, alternatively with a little knowledge you can deploy your work on the Internet. You does not need any programming knowledge to use this component, by logically following the instructions provided in this documentation,  you can almost  create profiles on any subject of your interest, from prominent people, celebrities in all fields to animals and plants, it can serve as a classification system of some sort. The component is for purpose of learning web programming,  it is free you can change it, modify it or share it, in accordance  with terms of service. For more details view the documentation file .");
  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice
  // Speak the text
  speechSynthesis.speak(utterance);
}
//end of speech 0

//_______________________________