// log the value of the input on every input
var inputText=document.querySelector('#input');
inputText.addEventListener('input',function(){
    console.log(inputText.value);
    button.removeAttribute('disabled','disabled');
    console.log(button.attributes);
})

// prevent default on button #submit click
var button=document.querySelector('#submit');
console.log(button.attributes);
button.setAttribute('disabled','disabled');
// and change text of #output to „Der Button wurde geklickt!“
let output=document.getElementById('output');
button.addEventListener('click',myfunction);
function myfunction(){
    output.innerHTML='Der Button wurde geklickt!';
}

// log the message „500px erreicht“, when the user scrolls more than 500pxt

window.onscroll=function(){
    if(document.body.scrollTop>500 ||  document.documentElement.scrollTop > 500)
    {
        console.log('500px erreicht');
    }
}