const missingBits = array => {
    const updatedArray = []

    for (i = 0; i < array.length; i++) {
        // we check number difference between current and next value
        let numberDifference = array[i+1] - array[i]
        //we push the current number
        updatedArray.push(array[i])

        //then we add the extras based on what's the numberDifference
        if(numberDifference > 2) {
            updatedArray.push('...')
        } else {
            for(y=1; y < numberDifference; y++) {
                updatedArray.push(array[i] + y)
            }
        }
    }

    return updatedArray
}

console.log(missingBits([1,5,7,9,10]))