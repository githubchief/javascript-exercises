const leapYears = function(year) {
    let leapYear=true;

    if ((year%100 == 0 ) && (year%4 == 0))
        {
            if (year%400 == 0)
            {
                return leapYear
            }
            else return false;
        }

    if(year%4 == 0) {
          return leapYear;
    } 
    return false;
};

// Do not edit below this line
module.exports = leapYears;
