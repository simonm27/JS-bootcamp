// const createCounter = () => {
//     let count = 0

//     return {
//         increment() {
//             count++
//         },
//         decrement() {
//             count--
//         },
//         getCount() {
//             return count
//         }
//     }
// }

// const counter = createCounter()
// console.log(counter)
// counter.increment()
// counter.decrement()
// counter.decrement()
// console.log(counter.getCount())

// //Adder

// const createAdder = (a) => {
//     return (b) => {
//         return a + b
//     }
// }

// const addTen = createAdder(10)
// console.log(addTen)
// console.log(addTen(-2))
// console.log(addTen(20))

//Tipper
const tipper = (tipPercent) => {
    return (amount) => {
        return tipPercent * amount
    }
}

const tipCalc = tipper(.15)
console.log(tipCalc(100))
console.log(tipCalc(20))

const tipCalc2 = tipper(.2)

console.log(tipCalc2(100))
console.log(tipCalc2(20))