import {Component} from '@angular/core';

import {OperandBase} from './operandbase';
import {Product} from './Product';
import {ProductComponent} from './product.component';
import {Quotient} from './Quotient';
import {QuotientComponent} from './quotient.component';


@Component({
    selector: 'nine-x-nine-container',
    templateUrl: './app/ninexnine.container.component/ninexnine.container.component.html',
    styleUrls: ['./app/ninexnine.container.component/ninexnine.container.component.css']
})
export class NinexNineComponent {
    numberList1:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    selectedNumber: Array<Boolean> = [];
    number1Range:number[] = [];
    isStarting: boolean;
    product:OperandBase;
    mathType:string;
    goodJob:any;
    badJob:any;

    constructor(){
        this.isStarting = false;
        this.selectedNumber[0] = true;
        this.number1Range[0] = 1;
        this.generateNewOne();
        this.mathType = 'devide';
    }

    changed(checked: boolean, index: number) {
        this.selectedNumber[index] = checked;
        this.number1Range = this.selectedNumber
                                .map((value, index) => value ? (index + 1) : null)
                                .filter((value, index) => value !== null);
        this.generateNewOne();
    }

    buttonTxt() {
        return  this.isStarting ? 'Stop' : 'Start';
    }

    buttonClick() {
        this.isStarting = !this.isStarting;
        this.generateNewOne();
    }

    mathTypeChanged(event:any, mType:string) {
        console.log('test ' + mType);

        this.mathType = mType;
        this.generateNewOne();
    }
    submitClick() {
        this.playSound();
        this.product = null;
        this.generateNewOneAsyn();
    }

    evaluateResult(event:Event) {
        this.playSound();
        this.generateNewOneAsyn();
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
        this.product = null;
        if (this.mathType === 'multiple') {
            this.product = new Product(this.number1Range, this.numberList1.length);
        } else {
            this.product = new Quotient(this.number1Range, this.numberList1.length);
        }
    }

    generateNewOneAsyn() {
        setTimeout((function () {
            this.generateNewOne();
        }).bind(this), 500);
    }

}