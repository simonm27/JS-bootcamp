const getPuzzle = (wordCount, callback) => {

    const request = new XMLHttpRequest() 

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
request.send()
}

//Making an http request


const getCountry = (countryCode, callback) => {

    const request2 = new XMLHttpRequest()

request2.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        let country = data.find((country) => country.alpha2Code === countryCode)
        callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback('An error has occurred', undefined)
        }
})

request2.open('GET', 'http://restcountries.eu/rest/v2/all')
request2.send()

}