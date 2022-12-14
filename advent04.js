const fs = require('fs')
const totalOverlapTest = (arr) => {
    if ((arr[0] >= arr[2] && arr[1] <= arr[3]) 
    || (arr[2] >= arr[0] && arr[3] <= arr[1]))
        return 1
    return 0
}
const overlapTest = (arr) => {
    if ((arr[0] >= arr[2] && arr[0] <= arr[3]) 
    || (arr[1] >= arr[0] && arr[1] <= arr[3]))
        return 1
    return 0
}
fs.readFile('input04.csv', 'utf8', (err, data) => {
    if (err) throw err;
    const result = data.split('\n')
        .reduce((acc, line) =>{
            return acc + overlapTest(line.match(/\d+/g).map(Number))
        }, 0)

    console.log(result)
})