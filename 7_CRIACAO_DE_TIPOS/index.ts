// 1 - Generics
function showData<T>(arg: T): string {
  return `O dado ${arg}`
}

console.log(showData(5))
console.log(showData("Testando Generic"))
console.log(showData(true))
console.log(showData(["teste"]))

// 2 - Constraint em Generic
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}

const myObj = { name: 'Porta', cor: 'Branca' }
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 }
const thirdObj = { price: 19.99, category: "Roupa" }

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj))

// 3 - Generics com Interface 
interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const mycar: Car = { name: "Fusca", wheels: 4, engine: 1, color: "red" }
const mypen: Pen = { name: "Fusca", wheels: false, engine: false, color: "black" }

console.log(mycar)
console.log(mypen)

// 4 - Type Parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste'))

// 5 - Keyof Type Operator
type Character = { name: string, age: number, hasDriveLicense: boolean }

type C = keyof Character

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`
}

const myChar: Character = {
  name: "Luis",
  age: 22,
  hasDriveLicense: true
}

showCharName(myChar, "name")

// 6 - Typeof Type Operator
const userName: string = "Luis"

const userName2: typeof userName = "João"

type x = typeof userName

const userName4: x = "Joaquin"

// 7 - Index Access Type
type Truck = { km: number, kg: number, description: string }

type km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Pouca Carga"
}

function showKm(km: km) {
  console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
  km: 5000,
  kg: 1000
}

showKm(newCar.km);

// 8 - Condicional Expression Type
interface A { }

interface B extends A { }

interface Teste {
  showName(): string
}

type mytype = B extends A ? number : String

const someVar: mytype = 5

type myTypeB = Teste extends { showNumber(): number } ? string : boolean

// 9 - Template Literals Type
type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = "some text"

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`

const a4: a3 = "Testando"