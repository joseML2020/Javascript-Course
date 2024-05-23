import { loginMessages } from '../config/login.js';

export class Login {

    constructor(
        username = 'jose',
        password = Math.random() //TODO: Probar usando una contraseña por defecto
    ) {
        this.username = username
        this.password = password
    }

    /**
    * Verifies login credentials and displays a corresponding alert.
    */
    login() {
        if (this.username === 'admin' && this.password === 'passwd') {
            alert(loginMessages.success)
        } else {
            alert(loginMessages.error)
        }
    }
    
    /**
     * Asynchronously verifies login credentials.
     * @param {string} username - The username to verify.
     * @param {string} password - The password to verify.
     * @returns {Promise<string>} A Promise that resolves to a success message if the login is successful,
     * or rejects with an error message if the login fails.
     */
    static loginWithUsername = async (username, password) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (username === 'admin' && password === 'passwd') {
                    resolve(loginMessages.success)
                } else {
                    reject(loginMessages.error)
                }
            }, 1000)
        })
    }
}