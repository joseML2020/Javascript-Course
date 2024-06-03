import {CarInterface} from '../models/Car'
import {MotorcycleInterface} from '../models/Motorcycle'

function isCar(type: CarInterface | MotorcycleInterface): type is CarInterface {
    return (type as CarInterface).pressPedal !== undefined;
}

function startDriving(type: CarInterface | MotorcycleInterface) {

    type.turnOnEngine()

    if (isCar(type)) {
        type.pressPedal()
    } else {
        type.openThrottle()
    }
}
function sumOrConcatenate(param1: number | string, param2: number | string): number | string {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else if (typeof param1 === 'string' && typeof param2 === 'string') {
        return `${param1}-${param2}`;
    } else {
        return `${param1}+${param2}`;
    }
}

function removeFirstEntry <T extends string | number>(arr: T[]): T[] {
    return arr.slice(1);
};

export {
    removeFirstEntry,
    sumOrConcatenate,
    startDriving,
    isCar
}