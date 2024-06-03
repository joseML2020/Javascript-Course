interface CarInterface {
    tires: number;
    turnOnEngine: () => void;
    pressPedal: () => void;
  }

class Car implements CarInterface {
    tires: number;
    

    constructor(tires: number=1) {
        this.tires = tires;
    }

    turnOnEngine(): void {
        console.log('El carro se encendio...');
    }

    pressPedal(): void {
        console.log('El carro esta arrancando...');
    }
    
     getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
}

export {
    Car,
    CarInterface
}