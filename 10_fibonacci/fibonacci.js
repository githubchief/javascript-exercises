const fibonacci = function(num) {
    let firstNum=0;
    let secondNum=1;
    let thirdNum=1;
    if(num.typeof == String) num=parseInt(num);
    if (num<0) return "OOPS";
   while(num)
   {
        thirdNum=firstNum+secondNum;
        firstNum=secondNum;
        secondNum=thirdNum;
        num--;
   }
   return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
