import {Component} from '@angular/core';
import {Product} from './Product';
import {ProductComponent} from './product.component';


@Component({
    selector: 'nine-x-nine-container',
    templateUrl: './app/ninexnine.container.component/ninexnine.container.component.html',
    styleUrls: ['./app/ninexnine.container.component/ninexnine.container.component.css']
})
export class NinexNineComponent {
    numberList1:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    selectedNumber: Array<Boolean> = [];
    number1Range:number[] = [];
    isStarting: boolean;
    product:Product;
    goodJob:any;
    badJob:any;

    constructor(){
        this.isStarting = false;
        this.selectedNumber[0] = true;
        this.number1Range[0] = 1;
        this.product = new Product(this.number1Range, this.numberList1.length);
    }

    changed(checked: boolean, index: number) {
        this.selectedNumber[index] = checked;
        this.number1Range = this.selectedNumber
                                .map((value, index) => value ? (index + 1) : null)
                                .filter((value, index) => value !== null);
        this.product = new Product(this.number1Range, this.numberList1.length);
    }

    buttonTxt() {
        return  this.isStarting ? 'Stop' : 'Start';
    }

    buttonClick() {
        this.isStarting = !this.isStarting;
        this.product = new Product(this.number1Range, this.numberList1.length);
    }

    submitClick() {
        this.playSound();
        this.product = null;
        this.generateNewOne();
    }

    evaluateResult(event:Event) {
        this.playSound();
        this.generateNewOne();
    }

    playSound() {
        if (this.product.isCorrect()) {
            console.log('correct');
            if (!this.goodJob) {
                this.goodJob = new Audio('good-job-zachary.mp3');
            }
            this.goodJob.play();
        } else {
            console.log('incorrect');
            if (!this.badJob) {
                this.badJob = new Audio('incorrect-amz.mp3');
            }
            this.badJob.play();
        }
    }

    generateNewOne() {
        setTimeout((function () {
            this.product = new Product(this.number1Range, this.numberList1.length);
        }).bind(this), 1000);
    }

}