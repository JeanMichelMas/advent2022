const fs = require('fs')
const height = 8
const stkNum = 9

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

/*
    [B]             [B] [S]        
    [M]             [P] [L] [B] [J]
    [D]     [R]     [V] [D] [Q] [D]
    [T] [R] [Z]     [H] [H] [G] [C]
    [P] [W] [J] [B] [J] [F] [J] [S]
[N] [S] [Z] [V] [M] [N] [Z] [F] [M]
[W] [Z] [H] [D] [H] [G] [Q] [S] [W]
[B] [L] [Q] [W] [S] [L] [J] [W] [Z]
 1   2   3   4   5   6   7   8   9 

move 3 from 5 to 2
move 5 from 3 to 1
move 4 from 4 to 9
move 6 from 1 to 4
move 6 from 8 to 7
move 5 from 2 to 7
move 1 from 5 to 4
move 11 from 9 to 7
move 1 from 1 to 9
move 6 from 4 to 6
move 12 from 6 to 7
move 1 from 9 to 2
move 2 from 4 to 6
*/