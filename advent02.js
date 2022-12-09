const fs = require('fs')
const scores = new Map()
scores.set('A X', 3)
scores.set('A Y', 4)
scores.set('A Z', 8)
scores.set('B X', 1)
scores.set('B Y', 5)
scores.set('B Z', 9)
scores.set('C X', 2)
scores.set('C Y', 6)
scores.set('C Z', 7)
// scores.set('A X', 4)
// scores.set('A Y', 8)
// scores.set('A Z', 3)
// scores.set('B X', 1)
// scores.set('B Y', 5)
// scores.set('B Z', 9)
// scores.set('C X', 7)
// scores.set('C Y', 2)
// scores.set('C Z', 6)


let max = fs.readFile('input02.csv', 'utf8', (err, data) => {
    if (err) throw err;
    const score = data.split('\n')
        .reduce((acc, cur) => {
            // console.log(cur)
            return acc + scores.get(cur)
        }, 0)

    console.log(score)
})
