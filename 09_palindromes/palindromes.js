const palindromes = function (str) {
    
    function isPunctuation(item) {
        const punctuationMarks = ["!", ",", ".", "?"," "];
        return punctuationMarks.includes(item);
      }
    
    str = str.toLowerCase()
    const split_string = str.split("")
    const filteredStr= split_string.filter(element => !isPunctuation(element));

    
    const reverse_array = filteredStr.slice().reverse()

    console.log(filteredStr)
    console.log(reverse_array)
    for (let i=0; i < split_string.length; i++) {
        if (filteredStr[i] != reverse_array[i]) {
            return false
        }
    }
    return true

};
// Do not edit below this line
module.exports = palindromes;
