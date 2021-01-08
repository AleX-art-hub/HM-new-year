//              TASK 2    
let num1 = ['a','b','c',];
console.log(num1.join(' and '));
console.log(num1.join(' or '));
console.log(num1.join(" and "," or "));



//              TASK 5  ДОДЕЛАТЬ
let arr11=[5,27,'hello', 0,'string'];
let arr22=['Uber', 100, 'Bolt'];
arr33=arr11.concat(arr22);
console.log(arr33);
console.log(arr33.sort());


//              TASK 5*
/*
let arr1 = [[0, 1], [2, 3], [4, 5]];
function transform(arr) {
  let i = 0;
  while(i < arr.length) {
    arr = arr.reduce(function(a, b) {
      return a.concat(b);
    },[]);
    i++;
  }
  return arr;
}
console.log(transform(arr1));
*/

//              TASK 7*
/*
function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("Lorem ipsum dolor sit amet consectetur adipisicing elit."));
*/


