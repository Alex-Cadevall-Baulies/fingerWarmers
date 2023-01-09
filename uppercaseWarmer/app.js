const text = 'test this test'

// turn every consonant after vowel into upercase
function consonantUpercase(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const letterArray = []
    
    for (let letter of text) {
        let index

        if(text.indexOf(letter) > 0) {
            index = text.indexOf(letter) -1
        } else {
            index = 0
        }
        
        if(vowels.includes(text[index])) {
            letterArray.push(letter.toString().toUpperCase())
        } else {
            letterArray.push(letter.toString())
        }
    }

    let finaltext = letterArray.join(" ")
    console.log(finaltext)
}

consonantUpercase(text)