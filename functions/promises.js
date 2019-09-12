
//Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the data')
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {

    } else {
        console.log(data)
    }
})

// Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('This is my promises error')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})