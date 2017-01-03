import {OperandBase} from './operandbase';

export class Quotient implements OperandBase {
    number1: number;
    number2: number;
    result: number;

    constructor(number1Range:number[], range:number) {
        this.number1 = Math.ceil(Math.random()*range);
        this.number2 = number1Range[Math.floor(Math.random()*number1Range.length)];
        this.number1 = this.number1 * this.number2;
    }

    isCorrect() {
        var ret:boolean = this.number1 / this.number2 === this.result;
        return ret;
    }
} 