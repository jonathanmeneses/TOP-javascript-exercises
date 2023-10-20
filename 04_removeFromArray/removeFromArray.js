const removeFromArray = function(array,...args) {

    let newarray = array;
    // for every index in args
    for (let i = 0; i < args.length; i++) {
        // what's the 
        if (array.includes(args[i])) {
            array.splice(array.indexOf(args[i]),1)
        }
    }
return array

};

// Plan --
// take arguments in, set them as a loop

removeFromArray([1,2,3,4],3)

// Do not edit below this line
module.exports = removeFromArray;
