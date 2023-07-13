//1
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = [];

userNames.map(item => {
    return item.split(' ')
  })
  .forEach(item => {
    initials.push(
      item.map(item => {
        return item[0]
      }).join('.')
    );
  })
initials.sort();

console.log(initials);

//2
const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = userNames.filter(item => 
  item[0] === 'А' ||
  item[0] === 'Е' ||
  item[0] === 'Є' ||
  item[0] === 'И' ||
  item[0] === 'І' ||
  item[0] === 'Ї' ||
  item[0] === 'О' ||
  item[0] === 'У' ||
  item[0] === 'Ю' || 
  item[0] === 'Я');

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const vowels = ['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'];
let filteredNames = [];
userNames.forEach(item => {
  if (vowels.includes(item[0])) {
    filteredNames.push(item);
  }
})

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

//3
const currentMaxValue = 4589;
let reverseMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//4
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((acc, item) => acc * item);

console.log(productOfArray); // 24