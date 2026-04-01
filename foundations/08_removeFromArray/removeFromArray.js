const removeFromArray = function(arr, ...num) {
    let result = arr.filter((numbers) => !num.includes(numbers));
    return result;
};



console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8], 7))
// Do not edit below this line
module.exports = removeFromArray;
