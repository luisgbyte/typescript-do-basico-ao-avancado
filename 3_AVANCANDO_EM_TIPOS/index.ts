// 1 - Arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)
console.log(numbers[2])

// Numbers = "teste" // error

const nomes: string[] = ["Luis", "Gustavo"]

// nomes.push(4) // error

// 2 - Outra sintaxe array
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

// nums.push("teste") // error
console.log(nums[0])

// 3 - Any
const arr1: any = [1, "teste", true, [], { nome: "Luis" }]

console.log(arr1)

arr1.push([1, 2, 3])

// 4 - Parâmetros tipados
function soma(a: number, b: number) {
  console.log(a + b);
}

// soma(5, "b") // error
soma(5, 5)

// 5 - Retorno de função
function greeting(name: string): string {
  return `Olá ${name}`
}

console.log(greeting("Luis"))

// 6 - Função anônima
setTimeout(() => {
  const sallary: number = 1000
  // console.log(parseFloat('sallary'))
  // console.log(sallary)
}, 1000)

// 7 - Tipos de objeto
function passCoordinates(coord: { x: number, y: number }) {
  console.log('X coordinates: ' + coord.x)
  console.log('Y coordinates: ' + coord.y)
}

const objCoord = { x: 329, y: 85 }

passCoordinates(objCoord)

const pessoaObj: { name: string, surname: string } = { name: "Luis", surname: "Gustavo" }

// 8 - Props opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a)
  console.log("B: " + b)

  if (c) {
    console.log("C: " + c)
  }
}

showNumbers(1, 2)

// 9 - Validando argumento opcional

/* Atenção: o primeiro argumento não pode ser opcional */

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`
  }

  return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Luis", "Gustavo"))
console.log(advancedGreeting("Luis"))

// 10 - Union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`)
}

showBalance(1000)
showBalance("1500")
// showBalance(true) // error

const arr2: Array<number | string | boolean> = [1, "teste", true]

// 11 - Avançando em union types
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!"
  }

  return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - Type alias
type ID = string | number

function showId(id: ID) {
  console.log(`O ID é ${id}`)
}

showId(1)
showId("200")

// 13 - Interfaces
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
  x: 1,
  y: 2,
  z: 3
}

showCoords(coordObj)

// 14 - Interface X Type alias

// A interface permite ser redefinida

interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = { name: "Luis", age: 22 }

console.log(somePerson)

/*
// Error
type personType = {
  name: string
}

type personType = {
  age: number
}
*/

// 15 - Literal types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`)
}

showDirection("left")
// showDirection("top") // error
showDirection("right")

// 16 - Non null assertion operators
const p = document.getElementById("some-p")

console.log(p)

// 17 - Bigint
let n: bigint

// n = 1
n = 1000n

console.log(n)
console.log(typeof n)
console.log(n + 100n)

// 18 - Symbol
let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)