const sumAll = function(num1, num2) {
    let sum=0;
    
    if((typeof(num1)!==typeof(num2)))
        return "ERROR";

    if (((num1 < 0) || (num2 < 0) )) {
        return "ERROR";
    }
    else if (num1<num2){

        do {
            sum=sum+num1;
            num1++;
        }while(num1!=num2);

        return (sum+num2);
    }
    else if (num1 > num2) {
        
        do {
            sum=sum+num2;
            num2++;
        }while(num1!=num2);

        return (sum+num1);

    }
};

//console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
