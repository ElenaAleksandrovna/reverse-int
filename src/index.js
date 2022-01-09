module.exports = function reverse (n) {
let string = n + '';
let array = string.split('');
if (array[0] == '-'){
    array.shift();
}
let reversed = array.reverse();
let finalString = reversed.join('');
let result = Number(finalString);
 return result;
}
