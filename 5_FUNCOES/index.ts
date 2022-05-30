// 1 - void
function withoutReturn(): void {
  console.log("Esta função não tem retorno!")
  // return 1;
}

withoutReturn()

// 2 - Callback como argumento
function greeting(name: string): string {
  return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função!")

  const greet = f(userName)

  return greet
}

console.log(preGreeting(greeting, "Luis"))

// 3 - Generic Function
function firtElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firtElement([1, 2, 3]))
console.log(firtElement(["a", "b", "c"]))
// console.log(firtElement("Teste"))

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({ name: "Luis" }, { age: 22, job: "Dev" })

console.log(newObject)

// 4 - Constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T

  if (+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("12", "5"))
// console.log(biggestNumber("12", 5)) // error

// 5 - Especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [5, 6]))
console.log(mergeArrays<number | string>([1, 2, 3], ["teste1", "teste2"]))

// 6 - Parâmetros Opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá, ${greet} ${name}, tudo bem?`
  }

  return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("Luis"))
console.log(modernGreeting("Luis", "Dr."))

// 7 - Parâmetros Default
function somaDefault(x: number, y: number) {
  return x + y
}

console.log(somaDefault(5, 5))
console.log(somaDefault(15, 15))

// 8 - Unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0])
  } else if (typeof x === 'number') {
    console.log("X é um número")
  }
}

doSomething([1, 2, 3])
doSomething(5)

// 9 - Never
function showErrorMessage(msg: string): never {
  throw new Error(msg)
}

// showErrorMessage("Algum error!")

// 10 - Rest Operator
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4))
console.log(sumAll(35, 25, 15, 5))
// console.log(sumAll("teste"))

// 11 - Destructuring como parâmetro
function showProductDetails({ name, price }: { name: string, price: number }): string {
  return `O nome do produto é ${name} e custa R$${price}`
}

const shirt = { name: "Camisa", price: 49.99 }

console.log(showProductDetails(shirt))