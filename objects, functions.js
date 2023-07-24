//1
function differenceBetweenDates(startDate, endDate, value){
  let startDateValue = new Date(startDate);
  let endDateValue = new Date(endDate);
  
  if (startDateValue > endDateValue) {
    [startDateValue, endDateValue] = [endDateValue, startDateValue];
  }

  if (value === 'days') { 
      return (endDateValue - startDateValue) / (1000 * 60 * 60 * 24) + ' days'
  }

  if (value === 'hours') { 
      return (endDateValue - startDateValue) / (1000 * 60 * 60) + ' hours'
  }

  if (value === 'minutes') { 
      return (endDateValue - startDateValue) / (1000 * 60) + ' minutes'
  }

  if (value === 'seconds') { 
      return (endDateValue - startDateValue) / 1000 + ' seconds'
  }
}

console.log(differenceBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));

//2
const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRaNges: '56.5426'
}

function optimizer(data) {
  let result = Object.fromEntries(Object.entries(data).map(([key, value]) => [key.toLowerCase(), parseFloat(data[key]).toFixed(2)])
  );
  return result;
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);

//3
function recursiveOddSumTo(number) {
  if (number === 0) {
    return 0;
  } else if (number % 2 === 1) {
    return number + recursiveOddSumTo(number - 1);
  } else {
    return recursiveOddSumTo(number - 1);
  }
}

console.log(recursiveOddSumTo(1))
console.log(recursiveOddSumTo(10))

//4.1
function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 2) {
    sum += i;
  }
  return sum;
};

console.log(iterativeOddSumTo(1))
console.log(iterativeOddSumTo(10))

//4.2
function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 0; i <= number; i ++) {
    if (i % 2 === 1) {
      sum += i;
    }
  }
  return sum;
};

console.log(iterativeOddSumTo(1))
console.log(iterativeOddSumTo(10))
