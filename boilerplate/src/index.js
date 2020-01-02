
// REST paramater starts with ...
const calculateAverage = (thing, ...numbers) => {
    //return (num + num2) / 2
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average =  sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('age', 0, 100, 88, 64))


const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
            
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

