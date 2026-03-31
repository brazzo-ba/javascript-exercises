const repeatString = function(string, num) {

let arr = "";

    if(num >= 0) { 
    for(i=0; i < num; i++){
        arr += string;
    }
}
    else if (num < 0) {
     arr = "ERROR";
    }
    return arr;
};

console.log(repeatString('hey', -1))

// Do not edit below this line
module.exports = repeatString;
