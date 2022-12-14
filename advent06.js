const fs = require('fs')

fs.readFile('input05.csv', 'utf8', (err, data) => {
    if (err) throw err;
    const lines = data.split('\n')
    const stacks = []
    /* stacks init */
    for (let j = 0 ; j < stkNum ; j++) {
        let column = j * 4 + 1
        stacks[j] = new Array()
        for (let i = height - 1 ; i >= 0 ; i--) {
            let line = lines[i]
            if(line[column] !== ' ')
                stacks[j].push(line[column])
        }
    }
    console.log(stacks)

    // const applyMove = (move => {
    //     const size = move[0]
    //     const source = move[1] - 1
    //     const dest = move[2] - 1
    //     for (let i = 0 ; i < size ; i++) {
    //         const value = stacks[source][stacks[source].length - 1]
    //         stacks[source].pop()
    //         stacks[dest].push(value)
    //     }
    // })

    const applyMove = (move => {
        const size = move[0]
        const source = move[1] - 1
        const dest = move[2] - 1
        const poped = stacks[source].splice(stacks[source].length - size, stacks[source].length)
        stacks[dest].push(...poped)
    })

    /* crate moves */
    lines.slice(height+2, lines.length)
        .map(line => line.match(/\d+/g).map(Number))
        .map(applyMove)

    console.log(stacks)
})
