const generateArrays = n => {
    if(n < 0 || isNaN(n) ) {throw new Error(`Number must be a positive integer`)}
    
    //Left arrayInsideArray outside of loop due to it making the code more readable
    const generatedArray = []
    let arrayInsideArray = []

    // first for defines number of arrays created
    for(let i = 1; i < n+1; i++) {
        //second for creates the arrays to push
        for (let x = 1; x <= i; x++){
            arrayInsideArray.push(x)
        }
    generatedArray.push(arrayInsideArray)
    arrayInsideArray = []
    }

    return generatedArray
}

console.log(generateArrays(5))