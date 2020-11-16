/**
 * VARIABLES
 */
const three = 3;
const six = 6;

// add six to three
var sum=three+six;
// subtract six from three
var result1=six-three;

// multiply three times six
var result2=six*three;

// divide three by six
var result3=three/six;

// modulo six by three
var result4=six%three;

// log results
console.log("summe="+sum);
console.log("subtract="+result1);
console.log("multiply="+result2);
console.log("divide="+result3);
console.log("übrig="+result4);
// build a function, that:
// takes two parameters
// checks if both parameters are numbers, else returns error message in the console
// divides the first one by the second one
// adds three to the result of the division
// multiplies the result by the second parameter
// when the result is equal to 21, subtract 4
// else add 4
// and then returns the result
function func1(x,y)
{
    if(!isNaN(x) && !isNaN(y))
    {
        var result=x/y;
        result+=3;
        result*=y;
        if(result==21)
        {
            result-=4;
        }
        else
        {
            result+=4;
        }
    }
    else
    {
        console.log("x oder y ist nicht eine Zahl")
    }
    return result;
}
console.log(func1(10,2));
console.log(func1(10,'two'));
console.log(func1('ten',2));
console.log(func1('ten','two'));
// log the result of the function