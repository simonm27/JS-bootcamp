
const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch puzzle')
    }
    }).then((data) => {
        return data.puzzle
    })
}

//Making an http request


const getCountry = (countryCode) => {
    return fetch(`http://restcountries.eu/rest/v2/all`, {}).then((response) => {
        
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}





//new Promise ((resolve, reject) => {
//     const request2 = new XMLHttpRequest()

// request2.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         let country = data.find((country) => country.alpha2Code === countryCode)
//         resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('An error has occurred')
//         }
// })

// request2.open('GET', 'http://restcountries.eu/rest/v2/all')
// request2.send()

// })