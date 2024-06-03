export interface PersonInteface {
    name: string,
    age: number,
    profession: string
}

export class Person implements PersonInteface {
    name: string;
    age: number;
    profession: string;

    constructor(name: string, age: number, profession: string) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

     getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
}