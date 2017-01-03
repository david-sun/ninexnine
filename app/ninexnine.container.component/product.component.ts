import {Component, Output, EventEmitter} from '@angular/core';
import {Input} from '@angular/core';
import {Product} from './product';

@Component({
    selector: 'product-component',
    templateUrl: './app/ninexnine.container.component/product.component.html',
    styleUrls: ['./app/ninexnine.container.component/product.component.css']
})
export class ProductComponent {
    @Input()
    product:Product;

    @Output() 
    productEntered = new EventEmitter<Product>();

    constructor() {
    }

    resultChanged(event:any, value:number) {
        var result:number = Number.parseInt(value.toString());
        if(event.keyCode === 13 && !isNaN(result) && result!==null && result!==undefined) {
            this.product.result = result;
            // trigger an event to tell outter side
            this.productEntered.emit(this.product);
        }
    }

    isShowResult(){
        var ret:boolean = Boolean(this.product.result);
        return ret;
    }
}