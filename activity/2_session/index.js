import { getPropertyObject, getKeyAndValueObject, setPropertyObject, regularFunction, arrowFunction } from './utils.js'
import { InvertirCadena } from './class/invertirCadena.js'
import { Login } from './class/login.js'

// Ejercicio 1
console.log('-------------------')
console.log('Ejercicio 1')
let person = {
  name: 'Lucas',
  age: 27,
  profession: 'Developer'
}
console.log(getPropertyObject(person))
console.log('-------------------')
console.log("KEYS/VALUES")
getKeyAndValueObject(person)
console.log('-------------------')
console.log('-------------------')

// Ejercicio 2
console.log('-------------------')
console.log('Ejercicio 2')

person.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am a ${this.profession}.`)
}

setPropertyObject(person, 'greetDefine', function () {
  console.log(`Hello, my name is ${this.name} and I am a ${this.profession}.`);
}, {
  writable: true,
  configurable: true,
  enumerable: false
})

person.greet()

console.log('-------------------')
console.log("KEYS/VALUES")
getKeyAndValueObject(person)
console.log('-------------------')

//Create the property through ObjectConstructor
person.greetDefine()
console.log('-------------------')

/**
* La razón por la que no puedes poner getAge como una arrow function 
* es debido a cómo las arrow functions manejan el valor de this. 
* A diferencia de las funciones tradicionales, las arrow functions no tienen su propio this. 
* En lugar de eso, heredan this del contexto léxico en el que fueron definidas. 
* Esto significa que this en una arrow function es el mismo que en el contexto circundante (el scope exterior).
* En el caso de los métodos de un objeto, 
* esto no es deseable porque quieres que this se refiera al objeto en sí, no al contexto exterior. 
* Si defines getAge como una arrow function dentro de person, 
* this no se referirá al objeto person como esperarías.
*/

person = {
  name: 'Lucas',
  age: 27,
  profession: 'Developer',
  getProssion: function () {
    console.log(`My profession is ${this.profession}.`)
  },
  getAgeArrow: () => console.log(`${this.name} is ${this.age} years old.`),  //undefined (hereda de su contexto léxico)
  getAge: function () { console.log(`${this.name} is ${this.age} years old.`) }, //Hello, my name is Lucas and I am a Developer.

  displayInfo: function (greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name} and I am a ${this.profession}${punctuation}`);
  }
}

try {
  person.getAgeArrow()
  regularFunction(1, 2, 3);
  person.getAge()
  arrowFunction(1, 2, 3);
} catch (e) {
  console.error(e)
}

const anotherPerson = {
  name: 'Jose',
  age: 24,
  profession: 'Full Stack'
}

try {
  person.displayInfo.call(anotherPerson, 'Hello', '!'); // Hello, my name is Jose  and I am a Full Stack!
  person.displayInfo.apply(anotherPerson, ['Hi', '.']); // Hi, my name is Jose and I am a Full Stack.

} catch (e) {
  console.error('Error', e)
}
console.log('-------------------')

// Ejercicio 3
console.log('-------------------')
console.log('Ejercicio 3')

const invertirCadena = new InvertirCadena();

try {
  invertirCadena.invertirCadena();
} catch (error) {
  console.error(error.message);
}

invertirCadena.cadenaInvertir = 'Hola mundo';

try {
  invertirCadena.invertirCadena();
} catch (error) {
  console.error(error.message);
}

if ('nuevoMetodo' in invertirCadena) {
  console.log('invertirCadena tiene el método nuevoMetodo');
  if (invertirCadena.nuevoMetodo instanceof Function) {
    invertirCadena.nuevoMetodo();
  } else {
    console.log('invertirCadena no es una funcion');

  }
} else {
  console.log('invertirCadena no tiene el método nuevoMetodo');
}


console.log('-------------------')


// Ejercicio 4
/*
console.log('-------------------')
console.log('Ejercicio 4')

let login = new Login('admin', 'passwd') // alert -> User logged in
let logbad = new Login('pepe', 'bad') // alert -> User or passwd incorrect

login.login()
logbad.login()

console.log('-------------------')
*/


// Ejercicio 5
document.addEventListener('DOMContentLoaded', function () {
  console.log('-------------------')
  console.log('Ejercicio 5')
  const loginSuccessBtn = document.getElementById('loginSuccess')
  const loginFailureBtn = document.getElementById('loginFailure')

  loginSuccessBtn.style.cursor = 'pointer'
  loginFailureBtn.style.cursor = 'pointer'


  loginSuccessBtn.addEventListener('click', function () {
    let login = new Login('admin', 'passwd')
    login.login()
  })

  loginFailureBtn.addEventListener('click', function () {
    let login = new Login('pepe', 'bad')
    login.login()
  })
  console.log('-------------------')
})

// Ejercicio 6
document.addEventListener('DOMContentLoaded', function () {
  console.log('-------------------')
  console.log('Ejercicio 6')
  const loginSuccessAsyncBtn = document.getElementById('loginSuccessAsync')
  const loginFailureAsyncBtn = document.getElementById('loginFailureAsync')

  loginSuccessAsyncBtn.style.cursor = 'pointer'
  loginFailureAsyncBtn.style.cursor = 'pointer'

  loginSuccessAsyncBtn.addEventListener('click', async function () {
    try {
      const result = await Login.loginWithUsername('admin', 'passwd');

      alert(result)
    } catch (error) {
      alert(error)
    }
  });

  loginFailureAsyncBtn.addEventListener('click', async function () {
    try {
      const result = await Login.loginWithUsername('pepe', 'bad');
      alert(result)
    } catch (error) {
      alert(error)
    }
  })
  console.log('-------------------')
})

