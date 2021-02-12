//01
let h1 = document.getElementsByTagName ("h1") [1]
console.log (h1.innerHTML)
//02
let liLast = document.getElementsByTagName ("li") [3]
console.log (liLast.innerText)
//03
let p = document.getElementsByTagName ("p") [0]
console.log (p.innerText.toUpperCase())
//04
[...document.getElementsByTagName("li")].forEach(element => {
    console.log(element.innerText.toUpperCase())
})