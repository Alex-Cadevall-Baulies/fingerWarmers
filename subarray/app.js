const numberArray = [-4, -2, 1, 2, 3, 6, 5]
const n = 3

//create biggest sum with n numbers maintaining array order
function maxArraySum(numberArray, n) {
    let maxCount = numberArray.length - n
    let i

    for (i = 0; i < maxCount; i++) {
    // select n numbers and sum
    const numbersSelected = numberArray.slice(0, n);
    const sumNumbers= numbersSelected.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(numbersSelected)
    console.log(sumNumbers)
    }
}

maxArraySum(numberArray, n)