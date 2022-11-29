let count=0;
let str="";
const repeatString = function (str,count) {

    let output='';

    if (count<0) {
        return "ERROR";
    }
    if (count==0) {
        return '';
    }
    if (str=='') {
        return '';
    }
    else {
    for (let i=0;i<count;i++)
     output+=str;
    return output;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
