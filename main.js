/******************
 * YOUR CODE HERE *
 ******************/

// it could be donw either way.
const onlyOdds = function(nums){
  return nums.filter(function(num){
  // const thing = nums.filter(function(num){
    return num % 2 === 1;
    // if(num % 2 === 1){
    //   return true;
    // }
    // if(!true){
    // return false
    // }
  });
  // return thing;
}

const onlyEvens = function(nums){
  const thing = nums.filter(function(num){
    if(num % 2 === 0){
      return true;
    }
    if(!true){
    return false
    }
  });
  return thing;
}

// both ways work
const shortNamesOnly = function(names){
  return names.filter(function(name){
    return name.length < 7;
  })
  // const thing = nums.filter(function(num){
  //   if(num.length < 7){
  //     return nums;
  //   }
  // });
  // return thing;
}

//both ways work
const sNames = function(names){
  return names.filter(function(name){
    return name[0] === 'S';
  })
  // const thing = nums.filter(function(num){
  //   if(num.startsWith('S')){
  //     return true;
  //   }
  // });
  // return thing;
}

// both work
const tripleAll = function(nums){
  return nums.map(function(num){
  // const thing = nums.map(function(num){
      return num * 3;
  });
  // return thing;
}

// for this one only one way is working
const negativeValues = function(numbers){
  return numbers.map(function(number){
    return number <= 0 ? number : number * -1;
  });
// const negativeValues = function(nums){
//   const thing = nums.filter(function(num){
//     if(num === -num){
//       return true;
//     } else {
//       return -num; 
//     }
//   });
//   return thing;
}

const questionings = function(nums){
  const thing = nums.map(function(num){
    return num + '?'
  });
  return thing;
}

const changeToInitials = function(names){
  return names.map(function(name){
    return name[0] + name[name.indexOf(' ') + 1]
  })
  // const thing = word
  // .toLowerCase()
  // .split(' ')
  // .map(function(letter)
  // {
  //   letter.charAt(0).toUpperCase() + letter.slice(1)
  // })
  // .join(' ');

  // return thing;
}

// only one way works
const doubleEven = function(numbers){
  return numbers.map(function(number){
    return Math.abs(number) % 2 === 1 ? number : number * 2;
  })
  // const thing = nums.filter(function(num){
  //   if(num % 2 === 0){
  //     return num
  //   }
  //   // num * 2;
  // });
  // return thing;
}

// only one works
const titleCaseNames = function(names){
  return names.map(function(name){
  return name[0].toUpperCase()+name.slice(1).toLowerCase();
  });
//   }
    // const thing = word.split(' ').map(function(word){
  //   word.charAt(0).toUpperCase() + word.slice(1)
  // }).join(' ');
  // return thing;
}

// only one works
const doubleEveryOther = function(numbers){
  return numbers.map(function(number, i){
    return i % 2 === 0 ? number : number * 2;
  });
  // const thing = nums.filter(function(num){
  //   if(!num % 2){
  //     return num * 2;
  //   } 

  // });
  // return thing;
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
  tripleAll,
  negativeValues,
  questionings,
  changeToInitials,
  doubleEven,
  titleCaseNames,
  doubleEveryOther,
}
