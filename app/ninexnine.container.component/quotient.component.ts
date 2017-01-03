import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Quotient} from './quotient';

@Component({
    selector: 'quotient-component',
    templateUrl: './app/ninexnine.container.component/quotient.component.html',
    styleUrls: ['./app/ninexnine.container.component/quotient.component.css']
})
export class QuotientComponent {
    @Input()
    quotient:Quotient;

    @Output() 
    quotientEntered = new EventEmitter<Quotient>();

    constructor() {
    }

    resultChanged(event:any, value:number) {
        var result:number = Number.parseInt(value.toString());
        if(event.keyCode === 13 && !isNaN(result) && result!==null && result!==undefined) {
            this.quotient.result = result;
            // trigger an event to tell outter side
            this.quotientEntered.emit(this.quotient);
        }
    }

    isShowResult(){
        var ret:boolean = Boolean(this.quotient.result);
        return ret;
    }
}
