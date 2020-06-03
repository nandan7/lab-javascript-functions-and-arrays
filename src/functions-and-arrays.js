// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b)
    return a;
  else if (a == b)
    return a, b;
  else
    return b;
}

// Progression #2: The lengthy word
const words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];
function findScaryWord(words) {
  var len = words.length;
  var max_len = 0;
  if (len == 0) {
    return null;
  }
  if (len == 1) {
    return words[0];
  }
  else {
    for (let i = 0; i < len; i++) {
      var wrd = words[i].length;
      if (wrd > max_len) {
        max_len = wrd;
        var lengthy_word = words[i];
      }
    }
    return lengthy_word;
  }
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  if (numbers.length == 1) {
    var sum = 0;
    return (sum = sum + numbers[0]);
  } else {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      var num = numbers[i];
      sum = sum + num;
    }
    return sum;
  }
}
array = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(array) {
  if (array.length == 0) {
    return 0;
  }
  else if (array.length == 1) {
    var sum = 0;
    sum = sum + array[0];
    return sum;
  }
  else if (array.length > 0) {
    for (i = 0; i <= array.length; i++) {
      var sum = 0;
      sum = sum + i;
      return sum;
    }
  }
  else {
    var sum = 0;
    for (let i = 0; i <= array.length; i++) {
      var num = array[i];
      sum = sum + num;
      return sum;
    }

  }
}



// Progression #4: Calculate the average

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr) {
  if (arr.length == 0) {
    return null;
  }
  else {
    var average = netPrice(arr);
    return average / arr.length;
  }
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(array) {
  var sum = 0;
  if (array.length == 0) {
    return null;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] == "boolean") {
        var l = array[i] / 1;
        sum = sum + l;
      } else {
        sum = sum + array[i].length;
      }
    }
  }
  var avg = sum / array.length;
  return avg;
}
array = [];
function avg() {
  if (array.length == 0) {
    return null;
  }
  else {
    var total = 0;
    for (i = 0; i <= array.length; i++) {
      total = total + array[i];
    }
    var avg = total / array.length;
    return avg;
  }
}
// Progression #5: Unique arrays
const wordsUnique = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt', 'egg', 'flour'];
function uniqueArray(array) {
  var unique = [];
  if (array.length == 0) {
    return null;
  }
  else {
    return array.filter((a, b) => array.indexOf(a) === b);
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(array, word) {
  if (array.length == 0) {
    return null;
  }
  else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == word) {
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
function howManyTimesElementRepeated(array, word) {
  var count = 0;
  if (array.length == 0) {
    return 0;
  }
  else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == word) {
        count = count + 1;
      }
    }
    return count;
  }
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
function maximumProduct(matrix) {
  for (i = 0; i <= matrix.length; i++) {
    if (i == 1)
      return 1;
  }
}