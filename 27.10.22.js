// 1
// Напиши скрипт пошуку самого маленького числа в масиві, при умові, що числа унікальні (не повторюються).
// const numbers = [51, 18, 13, 24, 7, 85, 19];

let smallestNumber = numbers[0];
for (const number of numbers) {
  if (number < smallestNumber) {
  smallestNumber = number;
  }
}
console.log(smallestNumber);


// 2
//  Напиши скрипт, який об"єднує всі елементи массива в один рядок.
//  Елементів може бути довільна кількість.
//  Нехай елементи массива  в рядку будут розділені комою.
//  - Спочатку через for
//  - Потім через join()
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
console.log(friends.join(','));
for (const friend of friends) {
  string += friend + ','
}
console.log(string);
// Повинно вийти 'Mango,Poly,Kiwi,Ajax'


// 3
//  Напиши скрипт який замінює регістр кожного символа в рядку на протилежний.
// Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
const str = 'JavaScript';
let reversStr = '';
const arrStr = str.split('');
console.log(arrStr);
for (const letter of arrStr) {
   if(letter === letter.toLocaleLowerCase()){
    reversStr += letter.toLocalUpperCase();
   } else{
     reversStr += letter.toLocaleLowerCase();
   }
}
console.log(reversStr);


// 4
//  Робимо slug в URL з назви стратті (приклад на dev.to)
// Заголовок статті складається тільки з букв та пропусків

//  - Нормалізуємо рядок
//  - Разбиваємо по словах
//  - Зшиваємо в рядок з розділителями
//  - Ченінг
// Повинно вийти top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';
const normalizeTitle = title.toLocaleLowerCase();
console.log(normalizeTitle);
const arrayTitle = title.split(' ');
console.log(arrayTitle);
const slugTitle = arrayTitle.join('-');
console.log(slugTitle);
// Простіший варіант
// const slugTitle = title.toLocaleLowerCase().split(' ').join(' ');
// console.log(slugTitle);


// 5
//  Працюємо з колекцією карток в trello
//  - Метод splice()
//  - Видалити
//  - Додати
//  - Оновити
const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];
console.table(cards);
const cardToRemove = 'Карточка-3';
const cardToUpdate = 'Карточка-4';
const cardToInsert = 'Карточка-6';
//Видалення (по індексу), метод indexOf()
const index = cards.indexOf(cardToRemove);
console.log(cards.splice(index, 1));
console.log(cards);
// Додавання (по індексу)
cards.splice(cards.length, 0, cardToInsert);
console.log(cards);
//Оновлення (по індексу)
cards.splice(0, 1, cardToUpdate);
console.log(cards);