/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox'
};

// add a new book to the books object
books['book4']='Verbrechen und Strafe';
console.log(books);
// using dot notation
books.book5='improbable';
// using square bracket notation
books['book6']='little women';
console.log(books);
// remove an book from the books object

delete books.book1;
console.log(books);
// log the third book
console.log(books.book3);
// iterate over the books and log every single one
for (item in books) 
{
  console.log(item+' = '+books[item]);
}



/**
 * ARRAYS
 */
let movies = ['Pulp Fiction', 'Inception', 'Call me by your name', 'Batman'];

// add a new movie to the array
movies.push('Spiderman');
// remove the book „Call me by your name“ from the books object
delete movies[2];
console.log('test 1', movies);
// log the first movie
console.log(movies[0])
// iterate over the movies and log every single one 
for( var i=0;i<movies.length;i++)
{
  console.log(movies[i]);
}