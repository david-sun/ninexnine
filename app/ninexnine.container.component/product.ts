import {OperandBase} from './operandbase';

export class Product implements OperandBase {
    number1: number;
    number2: number;
    result: number;

    constructor(number1Range:number[], range:number) {
        this.number1 = number1Range[Math.floor(Math.random()*number1Range.length)];
        this.number2 = Math.ceil(Math.random()*range);
        if(Math.random()>0.5) {
            var tmp:number = this.number1;
            this.number1 = this.number2;
            this.number2 = tmp;
        }
    }

    isCorrect() {
        var ret:boolean = this.number1 * this.number2 === this.result;
        return ret;
    }
}