import { Car } from "./models/Car";
import { Motorcycle } from "./models/Motorcycle";
import { Person, PersonInteface } from "./models/Person";
import {isCar,removeFirstEntry,startDriving,sumOrConcatenate} from './helpers/utils'


// Ejercicio 1
console.log('Ejercio 1 ------------')

const person1 : PersonInteface = {
    name: 'Jose Moro Luque',
    age: 24,
    profession: 'Full Stack Developer'
};

const person = new Person(person1.name, person1.age, person1.profession);
console.log(person);

// Ejercicio 2
console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4+hello 
console.log(sumOrConcatenate("hello", "world")); //hello-world

// Ejercicio 3
const car = new Car(2)
const motorCycle = new Motorcycle(2)

console.log('Car -----')
startDriving(car)
console.log('MotorCycle -----')
startDriving(motorCycle)

// Ejercicio 4
const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number | string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer']
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7]
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks']