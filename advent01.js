const fs = require('fs')
fs.readFile('input01.csv', 'utf8', (err, data) => {
    if (err) throw err;
    const max = data.split('\n')
        .map(Number).filter(n => !isNaN(n))
        .reduce((acc, cur) => {
            if (cur === 0) {
                return acc.concat(0)
            } else {
                acc[acc.length-1] += cur
                return acc
            }
        }, [0])
        .sort((a, b) => (b - a))
        .slice(0, 3)
        .reduce((acc, cur) => acc + cur, 0)

    console.log(max)
})
