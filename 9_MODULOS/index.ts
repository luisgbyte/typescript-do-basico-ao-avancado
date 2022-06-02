// 1 - Importanção de arquivos
import importGreet from "./greet";

importGreet();

// 2 - Import de Variável
import { x } from './variable'

console.log(x)

// 3- Múltiplas Importações
import { a, b, myFunction } from './multiple'

console.log(a)
console.log(b)

myFunction()

// 4 - Alias
import { someName as name } from "./changename";

console.log(name)

// 5 - Import All
import * as myNumbers from './numbers'

console.log(myNumbers)

myNumbers.showNumber()

// 6 - Importando Tipos
import { Human } from './mytype'

class User implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const luis = new User("Luis", 22)
console.log(luis)