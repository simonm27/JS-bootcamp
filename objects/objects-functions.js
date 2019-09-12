let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326 
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723 
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

let tempConverter  = function(temp) {
    let convertCelsius = (temp - 32) * 5 / 9
    let convertKelvin = (temp + 459.67) * 5 / 9
    
    return {
        fahrenheit: temp,
        celcius: convertCelsius,
        kelvin: convertKelvin
    }
}

let tempSummary = tempConverter(50)
console.log(tempSummary)