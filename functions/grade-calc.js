let gradeCalc = function(score, possScore) {
    let percentage = (score / possScore) * 100
    let grade
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

let result = gradeCalc(79, 100)
console.log(result)