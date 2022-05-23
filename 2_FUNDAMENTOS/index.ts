// 1 - numbers
let x: number = 22

console.log(x)
console.log(typeof x)

const y: number = 15.33333

console.log(y)
console.log(typeof y)

console.log(y.toPrecision(3))

// 2 - string
const firstName: string = "Luis"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Gustavo"

fullName = firstName + ' ' + lastName

console.log(fullName);

// 3 - boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a);

// 4 - inference e annotation
const ann: string = "teste"

let inf = "teste"

// ann = 1
// inf = 1
