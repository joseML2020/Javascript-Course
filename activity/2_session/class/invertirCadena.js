export class InvertirCadena {

    constructor(cadenaInvertir = '') {
        this.cadenaInvertir = cadenaInvertir;
    }

    /**
      * Inverts the stored string and prints it to the console.
      * @throws {Error} If the string to invert is empty.
      */
    invertirCadena = () => {
        if (this.cadenaInvertir === '') {
            throw new Error('La cadena a invertir no puede estar vacía.');
        }
        const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
        console.log(cadenaInvertida);
    }

    /**
   * Prints a message indicating that this is a new method.
   */
    nuevoMetodo() {
        console.log('Este es un nuevo método.');
    }
}