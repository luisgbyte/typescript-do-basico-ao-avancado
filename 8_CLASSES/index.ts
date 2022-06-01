// 1 - Campos em classe
class User {
  name!: string
  age!: number
}

const luis = new User()

console.log(luis)

luis.name = "Luis"
console.log(luis)

// 2 - Constructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const joao = new NewUser("João", 30)
console.log(joao)

// 3 - Campo Readonly
class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car("Fusca")

console.log(fusca)

fusca.name = "Fusca Turbo"

// fusca.wheels = 5

// 4 - Herança e Super
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)

// 5 - Métodos
class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log("Hey Stranger!")
  }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name)

jimmy.greeting()

console.log(jimmy)

// 6 - This
class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`)
  }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 400)

volvo.showDetails()

// 7 - Getters
class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName() {
    return this.name + " " + this.surname
  }
}

const luisGustavo = new Person("Luis", "Gustavo");

console.log(luisGustavo.name)
console.log(luisGustavo.fullName)

// 8 - Setters
class Coords {
  x!: number
  y!: number

  set fillx(x: number) {
    if (x == 0) {
      return
    }

    this.x = x

    console.log("X inserido com sucesso!")
  }

  set filly(y: number) {
    if (y == 0) {
      return
    }

    this.y = y

    console.log("Y inserido com sucesso!")
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`
  }
}

const myCoords = new Coords()

myCoords.fillx = 15
myCoords.filly = 20

console.log(myCoords)

console.log(myCoords.getCoords)

// 9 - Implements
interface showTitle {
  itemTitle(): string
}

class blogpost implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  itemTitle(): string {
    return `O título do post é: ${this.title}`
  }
}

const myPost = new blogpost("Hello World!")

console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  itemTitle(): string {
    return `O título é: ${this.title}`
  }
}

// 10 - Override de métodos
class Base {
  someMethod() {
    console.log("Alguma coisa...")
  }
}

class Nova extends Base {
  someMethod(): void {
    console.log("Testando alguma coisa...")
  }
}

const myObject = new Nova()

myObject.someMethod()

// 11 - Métodos de Visibilidade / Public
class C {
  public x = 10
}

class D extends C {

}

const cInstance = new C()
console.log(cInstance.x)

const dInstance = new D()
console.log(dInstance)

// 12 - Métodos de Visibilidade / Protected
class E {
  protected x = 20

  protected protectedMethod() {
    console.log("Este método é protegido!")
  }
}

class F extends E {
  showX() {
    console.log("X: " + this.x)
  }

  showProtectedMethod() {
    this.protectedMethod()
  }
}

const fInstance = new F()
fInstance.showX()
fInstance.showProtectedMethod()

// 13 - Métodos de Visibilidade / Private
class PrivateClass {
  private name = "Private"

  showName() {
    return this.name
  }

  private privateMethod() {
    console.log("Método Privado")
  }

  showPrivateMethod() {
    this.privateMethod()
  }
}

const pObj = new PrivateClass()

// console.log(pObj.name)

console.log(pObj.showName())

// console.log(pObj.privateMethod())

pObj.showPrivateMethod()

// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }
// Não é possivel acessar fora da classe

// 14 - Static Members
class StaticMembers {
  static prop = "Teste Static"

  static staticMethod() {
    console.log("Este é um método estático...")
  }
}

console.log(StaticMembers.prop)
StaticMembers.staticMethod()

// 15 - Generic Class
class Item<T, U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get showFirst() {
    return `O first é: ${this.first}`
  }
}

const newItem = new Item("caixa", "surpresa")

console.log(newItem)

console.log(newItem.showFirst)
console.log(typeof newItem.showFirst)

const secondItem = new Item(12, true)

console.log(secondItem.showFirst)
console.log(typeof secondItem.showFirst)

// 16 - Parameter Properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name
    this.qty = qty
    this.price = price
  }

  get showQty() {
    return `Qtd total: ${this.qty}`
  }

  get showPrice() {
    return `Price total: ${this.price}`
  }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99)

console.log(newShirt.name)
// console.log(newShirt.price)

console.log(newShirt.showQty)
console.log(newShirt.showPrice)

// 17 - Class Expressions
const myClass = class <T> {
  name

  constructor(name: T) {
    this.name = name
  }
}

const pessoa = new myClass("Jones")

console.log(pessoa)

console.log(pessoa.name)

// 18 - Abtract Class
abstract class AbtractClass {
  abstract showName(): void;
}

// const newObj = new AbstractClass(); // error

class AbstractExample extends AbtractClass {
  name: string

  constructor(name: string) {
    super()
    this.name = name
  }

  showName(): void {
    console.log(`O nome é: ${this.name}`)
  }
}

const newAbstractObject = new AbstractExample("Luis")

newAbstractObject.showName()

// 19 - Relações entre classes

// CURIOSIDADE
class Dog {
  name!: string
}

class Cat {
  name!: string
}

const doguinho: Dog = new Cat()

console.log(doguinho)