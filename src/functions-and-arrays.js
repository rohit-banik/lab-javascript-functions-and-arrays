// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2){
  if (num1>num2){
    return num1;
  }
  else{
    return num2;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length === 0){
    return null;
  }
  else{
    var max = words[0].length;
    var index = 0;
    for (i=1; i<words.length;i++){
      if(words[i].length>max){
        max = words[i].length;
        index = i
      }
    }
    return words[index]  
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  var sum = 0;
  for (i=0; i<numbers.length; i++){
    sum = sum + numbers[i]
  }
  return sum;
}

// Progression #3.1: Bonus
function add(arr){
  var sum = 0;
  for (const i of arr) {
    let num = 0;
    if (typeof i == 'string') {
        num = i.length;
    } else if (typeof i == 'boolean') {
        num = i == true ? 1 : 0;
    } else if (typeof i == 'number') {
        num = i;
    } else if (typeof i == 'object') {
        throw new Error("Unsupported data type sir or ma'am");
    }
    sum += num;
}
return sum;
}

// Progression #4: Calculate the average
function midPoint(arr){
  var sum = 0
  for (i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }
  return sum/arr.length;
}

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr){
  if(arr.length === 0){
    return null;
  }
  else{
    var sum = 0
    for (i=0; i<arr.length; i++){
      sum = sum + arr[i];
    }
    return sum/arr.length;
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr){
  if(arr.length === 0){
    return null;
  }
  else{
    var sum = 0
    for (i=0; i<arr.length; i++){
      wordLength = arr[i].length
      sum = sum + wordLength 
    }
    return sum/arr.length;
  }
}

// Bonus
function avg(arr){
  if (arr.length == 0) {
      return null;
  } else {
      let sum = 0;
      for (const i of arr) {
          let num = 0;
          if (typeof i == 'string') {
              num = i.length;
          } else if (typeof i == 'boolean') {
              num = i == true ? 1 : 0;
          } else {
              num = i;
          }
          sum += num;
      }
      average = parseFloat((sum / arr.length).toFixed(2));
      return average;
  }
};


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function onlyUnique(value, index, self){
  return self.indexOf(value) === index
}
function uniqueArray(arr){
  if (arr.length == 0) {
    return null;
  } 
  else {
    var unique = arr.filter(onlyUnique)
    return unique
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr, word){
  if (arr.length == 0) {
    return null;
  } 
  else{
    for (const i of arr){
      if(i == word){
        return true;
      }
    }
    return false;
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(arr, wordsearch){
  let count = 0;
  for (i=0; i<arr.length; i++){
    if(arr[i] == wordsearch){
      count++;
    }
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

var len = 4;
function maximumProduct(matrix){
    var max = 0;
    let check = matrix.length - len;
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[0].length; j++) {
            if (j <= check) {
                var horizontal = getRowArr(matrix, i, j);
            }
            if (i <= check) {
                var vertical = getColArr(matrix, i, j);
            }
            const curr = getMax(horizontal, vertical);
            if (curr > max) {
                max = curr;
            }
        }
    }
    return max;
};

function sum(arr){
    const sum = arr.reduce((previous, current) => {
        previous *= current;
        return previous;
    }, 1);
    return sum;
};

function getMax(x, y){
    let sumx = sum(x);
    let sumy = sum(y);
    let max = sumx > sumy ? sumx : sumy;
    return max;
};

function getRowArr(mat, row, col){
    let rarr = mat[row].slice(col, col + len);
    return rarr;
};

function getColArr(mat, row, col){
    let carr = [];
    for (let i = row; i < row + len; i++) {
        let elem = mat[i][col];
        carr.push(elem);
    }
    return carr;
};
