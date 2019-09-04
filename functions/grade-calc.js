const gradeCalc = function(score, possScore) {
    if (typeof score !== 'number' || typeof possScore !== 'number') {
        throw Error('Please enter a number')
    }

    const percentage = (score / possScore) * 100
    let grade = ''

    if (percentage <= 59) {
        grade = 'F'
    } else if (percentage <= 69) {
        grade = 'D'
    } else if (percentage <= 79) {
        grade = 'C'
    } else if (percentage <= 89) {
        grade = 'B'
    } else {
        grade = 'A'
    }

    return `${score}/${possScore} -> You got a ${grade} (${percentage}%)`
}


try {
    const result = gradeCalc(56, 100)
    console.log(result)
} catch(e) {
    console.log(e.message)
}


