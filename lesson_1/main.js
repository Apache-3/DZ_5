// // const symbols: = 'bgi'
// const numbers = '1231dsfsf23dsfd,&sf12""3'
// const regExp = /\w|[^]/g
// console.log(numbers.replace(regExp,'*'))
// // console.log(numbers.match(regExp))

// RECURSION
let count = 0
const recursionCount = () => {
    count ++
    console.log(count)
    if (count < 500)
    recursionCount()
}
recursionCount()