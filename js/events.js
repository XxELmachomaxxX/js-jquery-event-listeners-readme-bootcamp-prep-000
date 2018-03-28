//define functions here

$(document).ready(function(){

// call functions here

});

$('p').click('keypress')
function getIt(){
  alert('handler for .click() called.')
  return;
}

$('form').on('submit')
function submitIt(){
  alert('Your form is going to be submitted now.')
  return;
}

$('form').bind('keydown')
function pressIt(){
    alert('G has been pressed.')
  return;
}
$('minion').load('tasty'),function frameIt(){ 
   let frameIt = ('red frame'.addclass = ('tasty'))
   return frameIt;
 }

 
/*
$('tasty').load('tasty')
function frameIt(){
  let frameIt = ('red frame'.addclass = ('tasty'))
  return frameIt;
}
*/
/*
function checkUsername() {
  var elmsg = document.getElementById('feedback');
  var elUsername = document.getElementByID('username');
  if (ElUsername.value.length < 5) {
    elMsg.textContent = 'Username must be 5 characters or more';
  } else {
    elMsg.textContent = '';
  }
}
*/










