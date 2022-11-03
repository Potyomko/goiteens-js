//  Напиши функцію add для додавання довільної кількості аргументів (чисел)
// - Операція ... (rest)
const add = function (...args) {
   let sum = 0;
   for (const arg of args) {
    sum += arg
   }
   return sum;
};
console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));