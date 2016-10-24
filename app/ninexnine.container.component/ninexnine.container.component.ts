import {Component} from '@angular/core';
import {Product} from './Product';

@Component({
    selector: 'nine-x-nine-container',
    templateUrl: './app/ninexnine.container.component/ninexnine.container.component.html',
    styleUrls: ['./app/ninexnine.container.component/ninexnine.container.component.css']
})
export class NinexNineComponent {
    numberList1:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
    selectedNumber: Array<Boolean> = [];
    number1Range:number[] = [];
    isStarting: boolean;
    product:Product;
    result:number;
    goodJob:any;
    badJob:any;


    constructor(){
        this.isStarting = false;
        this.selectedNumber[0] = true;
        this.number1Range[0] = 1;
        this.product = new Product(this.number1Range);
    }

    changed(checked:boolean, index:number) {
        this.selectedNumber[index] = checked;
        this.number1Range = this.selectedNumber.map((value, index) => value?(index+1):null).
                                                filter((value, index) => value !== null);
        this.product = new Product(this.number1Range);
    }

    buttonTxt() {
        return  this.isStarting ? 'Stop' : 'Start';
    }

    buttonClick() {
        this.isStarting = !this.isStarting;
        this.product = new Product(this.number1Range);
    }

    resultChanged(event:any, value:number) {
        this.result = Number.parseInt(value.toString());
        if(event.keyCode === 13 && !isNaN(this.result) && this.result!==null && this.result!==undefined) {
            this.submitClick();
        }
    }

    ;
    submitClick() {
        this.product.product = this.result;
        if(this.product.isCorrect()) {
            console.log('correct');
            if(!this.goodJob) {
                this.goodJob = new Audio('good-job-zachary.mp3');
            }
            this.goodJob.play();
        } else {
            console.log('incorrect');
            if(!this.badJob) {
                this.badJob = new Audio('incorrect-amz.mp3');
            }
            this.badJob.play();
        }
        setTimeout((function() {
            this.result = null;
            this.product = new Product(this.number1Range);
        }).bind(this), 1000);
    }

    isShowResult(){
        var ret:boolean = Boolean(this.product.product);
        return ret;
    }


}