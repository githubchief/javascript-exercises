const reverseString = function(str) {
    
    var temp=  str.split("").reverse().join(""); //when split by " " is used, words are reversed.
    return temp;

};

// Do not edit below this line
module.exports = reverseString;
