//Query and remove first item with tag
// const p = document.querySelector('p')
// p.remove()

const ps = document.querySelectorAll('p')
console.log(ps)
ps.forEach(function(p) {
    // console.log(p.textContent)
    // p.remove()
    p.textContent = '******'
})