// Write a function firstReverse that takes a single string parameter and returns the string in reverse order.

function firstReverse(str) {
    var newStr = '';
    for (var i=str.length-1; i>=0; i--) {
        newStr += str[i];
    }
    return newStr;
}

// Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.

function swapCase(str) {
    str = str.split('');
    for (var i=0; i<str.length; i++) {
        if(str[i] === str[i].toUpperCase()) {
            str[i] = str[i].toLowerCase();
        }
        else {
            str[i] = str[i].toUpperCase();
        }
    }
    str = str.join('');
    return str;
}

// Bonus: Write a function letterCount that takes a single string parameter and returns the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by single spaces.

function letterCount(string) {
    function seekDoubles(str) {
        for (var i=1;i<str.length;i++) {
            var letter = str[i-1];
            if(str.includes(letter,i)) {
                return str;
            }
        }
    }
    string = string.split(' ');
    for (var i=0; i<string.length;i++) {
        if(seekDoubles(string[i])) {
            return string[i]
        }
    }
    return -1;
}

function letterCount2(string) {
    string = string.split(' ');
    for (var i=0;i<string.length;i++) {
        var word = string[i];
        for(var ii=0;ii<word.length;ii++) {
            var letter = word[ii];
            if((word.indexOf(letter,ii+1)>0)) {
                return word;
            }
        }
    }
    return word.indexOf(letter,ii+1)
}