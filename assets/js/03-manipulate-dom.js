// log text content from #headline
var text=document.getElementById('headline');


// change the text from the headline to:
// „Cool, sie ist offen! :)“
text.innerHTML='Cool,sie ist offen!: ';

// set value of the input element #input to:
// „Hier steht Text“
var text2=document.querySelector('#input');
text2.value='Hier steht Text';

// set the value of the input element #input
// as the innerHtml of the div #output
var output=document.querySelector('#output');
text2.addEventListener('input', function(){
    output.innerHTML=text2.value;
    console.log(text2.value);
});

// add the class bg-black to the body
// if there it doesn't got it alreadys
var bodyClass=document.querySelector('body');
if(bodyClass.className=='')
{
    bodyClass.setAttribute('class','bg-black');
}
console.log(bodyClass);
console.log(bodyClass.classList);


// toggle the class border-red on the #input

function myfunction(){
    text2.classList.toggle('border-red');
};



// multiply the data-number attribute by 3

console.log(output.attributes);
var number=(output.attributes['data-number'].value);
number*=3;
// and update the value in the dom
output.setAttribute('data-number',number);
console.log(output.attributes['data-number']);