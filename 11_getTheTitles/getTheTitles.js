const getTheTitles = function(books) {
    let res=[];
    let book=books.forEach(book => {
        res.push(book.title);
    });
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
