const repeatString = function(string,num) {
let stringToReturn = '';
if (typeof(num) == 'number' && num >= 0) {
    for (let i = 0; i < num; i++) {
        stringToReturn += string
    }
    return stringToReturn
}
else {
    return 'ERROR'
}


};


// Do not edit below this line
module.exports = repeatString;