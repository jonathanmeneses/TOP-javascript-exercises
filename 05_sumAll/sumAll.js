const sumAll = function(first,last) {

// let firstNum = Number(first)
// let secondNum = Number(last)
if (typeof(first) == 'number' && typeof(last) == 'number' && first >= 0 && last >= 0) {
    let start = Math.min(first, last)
    let end = Math.max(first, last)
    let sum = 0;
    for (i = start; i <= end; i++) {
        sum += i 
    }
    return sum
}
else {
    return 'ERROR'
}





};

console.log(sumAll(1,`yaaaa`))
// Do not edit below this line
module.exports = sumAll;

