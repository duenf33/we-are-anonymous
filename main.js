/******************
 * YOUR CODE HERE *
 ******************/
const onlyOdds = function(nums){
  const thing = nums.filter(function(num){
    if(num % 2 === 1){
      return true;
    }
    if(!true){
    return false
    }
  });
  return thing;
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

const shortNamesOnly = function(nums){
  const thing = nums.filter(function(num){
    if(num.length < 7){
      return nums;
    }
  });
  return thing;
}

const sNames = function(nums){
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

const tripleAll = function(nums){
  const thing = nums.filter(function(num){
    // return nums * 3;
  });
  return thing * 3;
}

const negativeValues = function(nums){
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

const questionings = function(nums){
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

const changeToInitials = function(nums){
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
const doubleEven = function(nums){
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

const titleCaseNames = function(nums){
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

const doubleEveryOther = function(nums){
  const thing = nums.filter(function(num){
    if(num % 2 === 1){
      return num * 2;
    } else {
      return num
    }
    // if(!true){
    // return false
    // }
  });
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
