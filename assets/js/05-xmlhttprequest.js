// listen to the submit of the form and prevent default
let myForm=document.getElementById('fetch-form');
myForm.addEventListener('submit',function(e){
    e.preventDefault();
})

// then save the form data and send it to https://hsh.blnq.dev/javascript-basics/form-fetch.php
/*let data=new FormData(myForm);
console.log(data);*/



// log the response

// get data from public api https://openlibrary.org/books/OL7353617M.json
let xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200)
    {
        console.log(this.responseText);
    }

};
xhr.open('get','./test.txt',true);
xhr.send();

// and display the title, first sentence & isbn 13 in the #output element
