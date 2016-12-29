export class Product {
    number1: number;
    number2: number;
    product: number;

    constructor(number1Range:number[], range) {
        this.number1 = number1Range[Math.floor(Math.random()*number1Range.length)];
        this.number2 = Math.ceil(Math.random()*range);
        if(Math.random()>0.5) {
            var tmp:number = this.number1;
            this.number1 = this.number2;
            this.number2 = tmp;
        }
    }

    isCorrect() {
        var ret:boolean = this.number1 * this.number2 === this.product;
        return ret;
    }
}