// 1. Створи пустий об'єкт user. Додай в об'єкт 
// властивість userName зі своїм іменем. Додай в 
// об'єкт властивість age зі своїм віком. Додай в 
// об'єкт метод showUserName, який виводить твоє ім'я.
// Додай в об'єкт метод updateAge, який додає під час 
// виклику до твоєго віку 1.
const user = {
    userName: 'Nika',
    age: 13,
    updateAge(num){
        return this.age += num
    }
};
// console.log(user);

console.log(user.updateAge(5));
console.log(user);


// const calculator = {
//     read(a,b){
//     this.num1 = a;
//     this.num2 = b;
//     console.log(calculator);
//     }
//     sum (){
//         return this.num1 + this.num2;
//     }
// }
// calculator.read(3,5)
// console.log(calculator.sum());