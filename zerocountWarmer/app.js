const numberString = '1203400560007800009'

//return string changing 0 to number of consecutive 0
function zeroToNumber(numberString) {
    const noZeroString = []
    let zeroCount = ''

    for (number of numberString) {
        if (number == 0) {
            zeroCount++
        } else {
            if(zeroCount === '') {
                noZeroString.push(number)
            }
            else {
                noZeroString.push(zeroCount)
                noZeroString.push(number)
                zeroCount = ''
            }   
        }
    }

    console.log(noZeroString.join(' '))
}

zeroToNumber(numberString)