const sumAll = function(numOne, numRange) {
    let sum = 0;
    if(
        Number.isInteger(numOne, numRange) &&
        numOne < numRange &&
        (numOne >= 0 && numRange >= 0) &&
        typeof (numOne) === 'number' &&
        typeof (numRange) === 'number' &&
        !isNaN(Number(numOne)) &&
        !isNaN(Number(numRange))
    ) {
        for(let i = numOne; i <= numRange; i++) {
    sum += i;
    }
    return sum;
    } else if(numRange < numOne) {
        for(let i = numRange; i <= numOne; i++) {
    sum += i;
    }
    return sum;
    }
    
    else {
        return 'ERROR';
    }


    
};
console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
