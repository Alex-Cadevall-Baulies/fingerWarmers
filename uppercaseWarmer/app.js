const text = 'test this test also aata'

// turn every consonant after vowel into upercase
function consonantUpercase(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const letterArray = []
    let i = 0
    
    for (let letter of text) {
        let index
        
        if(i > 0) {
            index = i -1
        } else {
            index = 0
        }
        
        if(vowels.includes(text[index])) {
            if(vowels.includes(letter))
            {
                letterArray.push(letter.toString())  
            }
            else {
                letterArray.push(letter.toString().toUpperCase())
            }
        } else {
            letterArray.push(letter.toString())
        }
        i++
    }

    let finaltext = letterArray.join(" ")
    console.log(finaltext) 
}

consonantUpercase(text)