const removeFromArray = function(srcArray,...delArray) {
    
    let temp1=srcArray.length;
    let temp2=delArray.length;
    for (let i=0; i<temp1;i++) {
        for(let j=0; j<temp2;j++) {
            if(srcArray[i]===delArray[j]) {
                srcArray.splice(i,1);
                i=0;
            }
        }
    }
    console.log(srcArray);
    return (srcArray);
};

// Do not edit below this line
module.exports = removeFromArray;
