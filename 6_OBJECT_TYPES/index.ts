// 1 - Tipo de objeto para função com interface
interface Product {
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product): void {
  console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
  if (product.isAvailable) {
    console.log("O produto está disponível!")
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 19.99,
  isAvailable: true
}

showProductDetails(shirt)
showProductDetails({ name: "Tênis", price: 100, isAvailable: false })

// 2 - Propriedade opcional em interface
interface User {
  email: string,
  role?: string
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`)

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`)
  }
}

const u1: User = {
  email: "lg@gmail.com",
  role: "SuperAdmin"
}

const u2: User = {
  email: "ls@gmail.com"
}

showUserDetails(u1)
showUserDetails(u2)

// 3 - Readonly
interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: "VW",
  wheels: 4
}

console.log(fusca)

// fusca.wheels = 5 // error

//  4 - Index Signature
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10
}

coords.y = 15

console.log(coords)

// coords.z = "teste" // error

// 5 - Extending Interfaces
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const luis: Human = {
  name: "Luis",
  age: 22
}

console.log(luis)

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"]
}

console.log(goku)
console.log(goku.superpowers[1])

// 6 - Intersection Types
interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12
}

console.log(arnold)
console.log(arnold.caliber)

// 7 - Readonly Array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

// myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item) => {
  console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray)
// myArray[0] = "teste"

// 8 - Tuplas
type fiveNumber = [number, number, number, number, number]

// number[]
const myNumberArray: fiveNumber = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumber = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumber = [1, true, "teste", 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Luis", 22]

console.log(anotherUser[0])

anotherUser[0] = "João"
// anotherUser[1] = "teste"

// 9 - Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([1, 2])