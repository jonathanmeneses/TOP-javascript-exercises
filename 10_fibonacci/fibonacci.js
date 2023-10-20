const fibonacci = function(n) {



let fibSequence = [1,1]

if (n <=0) {
    return "OOPS"
}
else 
for (let i=2; i < n; i++) {
    const nextFib = fibSequence[i-1] + fibSequence[i-2]
    fibSequence.push(nextFib)
}
console.log(fibSequence)
return fibSequence[n-1]

};


// Grab the number you want to return
// start a fibonnacci sequence
// add the previous two numbers together to get the current
// stop when you get to the nth number
// return the nth number


// Do not edit below this line
module.exports = fibonacci;
