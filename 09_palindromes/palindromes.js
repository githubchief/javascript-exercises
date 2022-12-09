const palindromes = function (str) {
    let temp=str.toLowerCase();
  temp=temp.replace(/[^A-Za-z]/g, '');
  temp=temp.replace(/\s/g,'');
    let i=0;
    let len=temp.length;
    console.log(temp);
    let j=len;
  
  while(i<len/2) {
    if (temp[i]!=temp[j-1]) { 
        
        return false; 

    } 
    i++;
    j--;
        
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
