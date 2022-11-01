// Напиши функцію calculateTotalPrice(items)
// яка приймає масив цін і повертає їх сумму
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;
for (const item of items) {
  total += value;
}
console.log('Total: ', total);  
console.log(calculateTotalPrice([1, 2, 3])); // 6
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600


// Напиши функцію logItems(items) для перебора і логування массива
const logItems = function (items){
for (const item of items) {
    console.log(item);
}
}
logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);


// Напиши скрипт пошуку логіна
// - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
// - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
const message = logins.includes(loginToFind) ? `Користувач ${loginToFind} знайдено.` : `Користувач ${loginToFind} не знайдено.`;
console.log(message);
const findLogin = function(loginsArray, loginToFind){
    const message = logins.includes(loginToFind) ? `Користувач ${loginToFind} знайдено.` : `Користувач ${loginToFind} не знайдено.`;
    return message;
}
console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));