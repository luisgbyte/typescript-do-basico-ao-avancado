// 1 - Exemplo Decorator
function myDecorator() {
  console.log("Iniciando decorator!")

  return function (target: any, propertKey: string, description: PropertyDescriptor) {
    console.log("Executando decorator...")
    console.log(target)
    console.log(propertKey)
    console.log(description)
  }
}

class myClass {
  @myDecorator()
  testing() {
    console.log("Terminando execução do método...")
  }
}

const myObj = new myClass()
myObj.testing();

// 2 - Multiplos Decorators
function a() {
  return function (target: any, propertKey: string, description: PropertyDescriptor) {
    console.log("Executou a.")
  }
}

function b() {
  return function (target: any, propertKey: string, description: PropertyDescriptor) {
    console.log("Executou b.")
  }
}

function c() {
  return function (target: any, propertKey: string, description: PropertyDescriptor) {
    console.log("Executou c.")
  }
}

class MultipleDecorators {
  @c()
  @b()
  @a()
  testing() {
    console.log("Terminando execução...")
  }
}

const multiple = new MultipleDecorators()
multiple.testing()

// 3 - Class Decorators
function ClassDec(constructor: Function) {
  console.log(constructor)
}

@ClassDec
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

const luis = new User("Luis")

console.log(luis)

// 4 - Method Decorator
function enumerable(value: boolean) {
  return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerable(false)
  showName() {
    console.log(this)
    return `O nome da máquina é: ${this.name}`
  }
}

const trator = new Machine("Trator")

console.log(trator.showName())

// 5 - Acessor Decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(false)
  get showName() {
    return `Nome do monstro: ${this.name}`
  }

  @enumerable(false)
  get showAge() {
    return `Idade do monstro: ${this.age}`
  }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

// 6 - Property Decorator
function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string

    const getter = function () {
      return value
    }

    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0")
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    })
  }
}

class ID {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newItem = new ID("1")

console.log(newItem)
console.log(newItem.id)

// 7 - Exemplo Real com Class Decoretor
function createDate(created: Function) {
  created.prototype.createdAt = new Date()
}

@createDate
class Book {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

@createDate
class Pen {
  id

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(1)
const newPen = new Pen(1)

console.log(newBook)
console.log(newPen)

console.log(newBook.createdAt)

// 8 - Exemplo real Method Decorator
function checkIfUserPosted() {
  return function (target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value
    // console.log(childFunction)
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou!")
        return null
      } else {
        return childFunction.apply(this, args)
      }
    }

    return descriptor
  }
}

class Post {
  alreadyPosted = false

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post do usuário: ${content}`)
  }
}

const newPost = new Post()

newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu primeiro post!", newPost.alreadyPosted)

// 9 - Exemplo real Preperty Decorator
function Max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string

    const getter = function () {
      return value
    }
    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máx ${limit} dígitos.`)
        return
      } else {
        value = newVal
      }
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    })
  }
}

class Admin {
  @Max(10)
  username

  constructor(username: string) {
    this.username = username
  }
}

let luisAdm = new Admin("SuperAdmin123456789")
let Adm = new Admin("SuperAdmin")
