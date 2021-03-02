import { Component, OnInit } from '@angular/core';
import * as calc from '../calculator/calculator';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {

  private _n1 : number  = 0;
  private _n2 : number  = 0;
  operator : string = ''
  result : number = 0;

  set n1(value : string){
    this._n1 = parseInt(value)
  }

  set n2(value : string){
    this._n2 = parseInt(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

  onCalculateClick(){
    switch(this.operator){
      case 'add' :
        this.result = calc.add(this._n1, this._n2);
        break;
      case 'subtract' :
        this.result = calc.subtract(this._n1, this._n2);
        break;
      case 'multiply' :
        this.result = calc.multiply(this._n1, this._n2);
        break;
      case 'divide' :
        this.result = calc.divide(this._n1, this._n2);
        break;        
    }
  }

}
