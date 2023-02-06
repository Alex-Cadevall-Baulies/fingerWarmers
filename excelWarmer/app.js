const columnNumber = (n) => {
    //alphabet has blank space on index nº 0 to make A nº 1
    const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //we take the whole alphabet length except for the first blank space
    let mode = alphabet.length - 1
    let number = 0

    // each iteration (based on variable length) changes the number
    for(let i = 0; i < n.length; i++){
        number = number * mode + alphabet.indexOf(n[i]);
    }
    return number;
}


console.log(columnNumber("AAA"))


//solution using charCodeAt
//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//we substract -64 to the charCodeAt result as uppercase letters start on number 65
function lettersToNumber(letters){
    let n = 0
    for(let p = 0; p < letters.length; p++){
        n = letters[p].charCodeAt() - 64 + n * 26;
    }
    return n;
}

console.log(lettersToNumber("AAA"))
