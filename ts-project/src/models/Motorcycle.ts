interface MotorcycleInterface {
    tires: number;
    turnOnEngine(): void;
    openThrottle(): void;
}

class Motorcycle implements MotorcycleInterface {
    tires: number;


    constructor(tires: number = 2) {
        this.tires = tires;
    }

    openThrottle(): void {
        console.log('La moto esta arrancando...');
    }

    turnOnEngine(): void {
        console.log('La moto se encendio...');
    }

    getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
}

export {
    Motorcycle,
    MotorcycleInterface
}