//Array we will use for check
const array = [1, 1, 2, 1, 2, 2, 2, 5, 6, 5, 5]

//function to use, we pass 1 parameter
const repeatedGroups = (array) => {
    const finalArray = []
    let arrayToPush = []

    for (i = 0; array.length > i; i++) {
        //we check if value is equal to previous or next value to push
        if (array[i] == array[i + 1] || array[i] == array[i - 1]) {
            arrayToPush.push(array[i])
        } 
        
        //if it is not we push the arrayToPush to a new finalArray
        else if (arrayToPush.length) {
            finalArray.push(arrayToPush)
            arrayToPush = []
        }
    }

    //This function exists to avoid incidences when a match is found at the end of the array as for() will not push it
    if (arrayToPush.length) {
        finalArray.push(arrayToPush)
    }
    
    return finalArray
}


console.log(repeatedGroups(array))