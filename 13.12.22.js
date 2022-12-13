// const itemEl = document.querySelectorAll(".item");
// console.log('У списку $(itemEl.lenght) категорії.');
// const titleEl = document.querySelectorAll('h2')
// console.log(titleEl);
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];
  
  const colorPickerContainerEl = document.querySelector('.js-color-picker');

  const colorPickerContainerE1 = document.querySelector('.js-color-picker');

const option = colorPickerContainerEl[0];
console.log(option);

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// console.log(buttonEl);
// const buttons = colorPickerOptions.map(function(option){
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList = 'color-picker__option'
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

// // console.log(buttonEl);
// return buttonEl
// })

// console.log(buttons);

// colorPickerContainerEl.append(...buttons);

const createBtnEl = function (options) {
    return options.map(function (option) {
        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.classList = 'color-picker_option';
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color;
    return buttonEl
    })
}

const btns = createBtnEl(colorPickerOptions);

colorPickerContainerEl.append(...btns);



const products = [
    {
      name: 'Товар-1',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
      price: 2000,
      available: true,
      onSale: true,
    },
{
      name: 'Товар-2',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
      price: 1000,
      available: true,
      onSale: false,
    },
{
      name: 'Товар-2',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
      price: 3000,
      available: false,
      onSale: false,
    },
{
      name: 'Товар-3',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
      price: 1500,
      available: true,
      onSale: false,
    },
{
      name: 'Товар-4',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
      price: 2500,
      available: false,
      onSale: false,
    },
  ];

  const createArticle = function (arr) {
    const articleEl = document.createElement('article');
    articleEl.classList.add = 'product';

    const productName = document.createElement('h2');
    productName.classList.add = 'product__name';
    productName.textContent = products.name;

    const productDescrEl = document.createElement('p');
    productDescrEl.classList.add = 'product_descr';
    productDescrEl.textContent = products.description;

    const productPridct = document.createElement('p');
    productPridct.classList.add = 'product__pridct';
    productPridct.textContent = `Ціна: ${products.price} крудитів`;

    articleEl.spend(productName, productDescr, productPridct)

    return articleEl;
  }