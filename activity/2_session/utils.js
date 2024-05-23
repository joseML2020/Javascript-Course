
/**
 * Returns the properties of an object as an array of strings.
 * @param {Object} object - The object to get properties from.
 * @returns {string[]} - An array of strings containing the names of the object's properties.
 */
const getPropertyObject = (object) => Object.keys(object)

/**
 * Print the keys and values of an object to the console.
 * @param {Object} object - The object to print keys and values from.
 */
const getKeyAndValueObject = (object) => {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            console.log(key, object[key])
        }
    }
}

/*
 Example: 
 Object.defineProperty(person, 'greetDefine', {
  value: function () {
    console.log(`Hello, my name is ${this.name} and I am a ${this.profession}.`);
  },
  writable: true,
  configurable: true,
  enumerable: false
});
 */

/**
 * Sets a new property on an object with the specified configuration.
 * @param {Object} object - The object to add the property to.
 * @param {string} name - The name of the property to define.
 * @param {Function} valueFunction - The function or value associated with the property.
 * @param {Object} config - The configuration of the property to define.
 */
const setPropertyObject = (object, name, valueFunction, config) => {
    Object.defineProperty(object, name, {
        value: valueFunction,
        writable: config.writable,
        configurable: config.configurable,
        enumerable: config.enumerable
    });
}

/**
 * Prints the arguments passed to the function in the console.
 */
function regularFunction() {
    console.log(arguments); // [1, 2, 3]
}

/**
 * Arrow function that tries to print the arguments passed to the function in the console (will not work correctly).
 */
const arrowFunction = () => {
    console.log(arguments); // Error: arguments is not defined
};

export { getPropertyObject, getKeyAndValueObject, setPropertyObject, regularFunction, arrowFunction };
