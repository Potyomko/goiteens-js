// функція конструктор
// властивості імʼя вік дата заїзду
// 2 методи змінити дату і отримати імʼя
// 2-3 екземпляру

// function Client(name, age, data) {
//     this.name = name;
//     this.age = age;
//     this.data = data;
// }

// Client.prototype.changeData = function (newData) {
//     this.data = newData;
// }

// const clientInstance = new Client();
// const newClient = new Client('Nika', 13, '3 january')
// console.log(newClient);



class Clients {
    constructor(name, age, date){
        this.name = name;
        this.age = age;
        this._date = date;
    }

    get date(){
        this._date;
    }

    set date(newDate){
        this._date = newDate;
    }
}
console.log(date);