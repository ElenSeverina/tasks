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

//1.1
userNames.forEach(item => {
  i = item.split(' ')
  initials.push(`${i[0][0]}.${i[1][0]}.${i[2][0]}`);
})
initials.sort();

//1.2
userNames.map(item => {
  return item.split(' ')
}).forEach(i => {
  initials.push(`${i[0][0]}.${i[1][0]}.${i[2][0]}`);
})
initials.sort();


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

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = [];
const regex = /^[\А\Е\У\О\І\Я\И\Ю]/;
userNames.forEach(item => {
  if (regex.test(item) == true) {
    filteredNames.push(item);
  }
})

console.log(filteredNames);

//3
const currentMaxValue = 4589;
let reverseMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//4
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((acc, item) => acc * item);

console.log(productOfArray); // 24

//5
const array = [1, 2, 5, 7, 8, 9, 10];
let sum = 0;
function sumOfEvenNumbers (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

console.log(sumOfEvenNumbers(array));

let array1 = [5, 2, 4, 7, 3];
let sum = 0;
array1.forEach(item => {
  if (item % 2 === 0) {
    return sum += item;
  }
})    

console.log(sum);