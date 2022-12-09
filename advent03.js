const fs = require('fs')
const char2Advent03Score = (ch => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return letters.indexOf(ch) + 1
})
const findReccuringLetter = (charArray => {
    const array = charArray.split('')
    const array1 = array.slice(0, array.length/2)
    const array2 = array.slice(array.length/2, array.length)
    return array1.filter(car1 => array2.find(car2 => car2 === car1))
})

fs.readFile('input03.csv', 'utf8', (err, data) => {
    if (err) throw err;
    const lines = data.split('\n')
    const score = lines.reduce((acc, cur) => {
        const result = findReccuringLetter(cur)
        console.log(result.join().charCodeAt(0))
        return acc + char2Advent03Score(result[0])
    }, 0)

    console.log('score =' + score)
})
