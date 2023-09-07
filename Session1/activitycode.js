//Activity 1 - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_ARRAYSIMPLEES6/
//Write a method which returns an array without the listed values
function removeListedValues(arr, without) {

    let newArr = arr.filter((items)=>{
          if(without.includes(items))return false;
          else return true;
    });
    return newArr;
}




//----Activity-2 - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_OBJECTES6/
//The personDetails() function is called with two parameters, a and b. These represent the first name and last name of a person.
// Complete the function personDetail() such that it returns an object modelling a person that has the following properties:

// firstName: this value is equal to parameter a.

// lastName: this value is equal to parameter b.

// fullName: this value is equal to concatenation of a and b separated by a space.
function personDetail(a, b) {
    let obj={};
    obj.firstName = a;
    obj.lastName = b;
    obj.fullName = a+" "+b;

    return obj;
}




//----Activity - 3 - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_DATEES6/
//You are given a date in the form of "DD/MM/YYYY". Calculate the number of days between the given date and today's date.

// Today's day is the date when the program is executed.

// Note

// Sample I/O considers today's date as 28/08/2020

// You may assume all the dates in the input are correct and in the given format

// The given date is in the past as compared to today

// JavaScript new Date() constructor takes in date in the "MM/DD/YYYY" format

// Use let todaysDate = new Date() to get today’s date

// Use Split() function to split the input date string 10/08/2020 where you can pass "/" as a deluminator. You can check the reference link given below to know how to use Split() function.

// Keep in mind, input strings format is "DD/MM/YYYY" and the JavaScript new Date() constructor take date in the “MM/DD/YYYY” format.

function getNumberOfDays(date) {
    let todaysDate = new Date().setUTCHours(0,0,0,0);
    let newDate = date.split("/");
    var temp = newDate[0];
    newDate[0]=newDate[1];
    newDate[1]=temp;
    let finalDate = newDate.join("/");
    //another way is to directly concat the elements from array to get a new date string
    
    let  givenDate =  new Date(finalDate).getTime();

    var ans = todaysDate-givenDate;
    return ans/(1000*60*60*24); 
}






//Activity - 4 - https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_ARROWES6/
//Create an arrow function named modify() which takes an integer array as input and modify the array as follows -

// If an element of the array is prime, then add one to the element

// If an element of the array is not prime, then multiply the element by 2.


// Return the modified array.

function isPrime(num){
    if(num===0 || num===1)return false;
    for(var i=2;i<=Math.sqrt(num);i++){
          if(num%i===0)return false;
    }
    return true;
}



let modify = (array) => {
//       for(let i =0;i<array.length;i++){
//             if(isPrime(array[i]))array[i]= array[i]+1;
//             else array[i]=array[i]*2;
//       }
//     return array;

const ans = array.map((items)=>{
    if(isPrime(items)) return items+1;
    else return items*2;
});
return ans;
}





