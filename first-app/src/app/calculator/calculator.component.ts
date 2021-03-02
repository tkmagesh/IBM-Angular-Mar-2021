import { Component, OnInit } from '@angular/core';
import * as calc from './calculator'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  result : number = 0;
  private _n1 : number = 0;
  private _n2 : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  set n1(value : string){
    this._n1 = parseInt(value);
  }

  set n2(value : string){
    this._n2 = parseInt(value);
  }

  onAddClick(){
    this.result = calc.add(this._n1, this._n2)
  }
  onSubtractClick(){
    this.result = calc.subtract(this._n1, this._n2)
  }
  onMultiplyClick(){
    this.result = calc.multiply(this._n1, this._n2)
  }
  onDivideClick(){
    this.result = calc.divide(this._n1, this._n2)
  }

}
/* export class CalculatorComponent implements OnInit {

  result : number | null  = null;

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(txtN1Value : string, txtN2Value : string){
    const n1 = parseInt(txtN1Value),
      n2 = parseInt(txtN2Value);
    this.result = n1 + n2;
  }
  onSubtractClick(txtN1Value : string, txtN2Value : string){
    const n1 = parseInt(txtN1Value),
      n2 = parseInt(txtN2Value);
    this.result = n1 - n2;
  }
  onMultiplyClick(txtN1Value : string, txtN2Value : string){
    const n1 = parseInt(txtN1Value),
      n2 = parseInt(txtN2Value);
    this.result = n1 * n2;
  }
  onDivideClick(txtN1Value : string, txtN2Value : string){
    const n1 = parseInt(txtN1Value),
      n2 = parseInt(txtN2Value);
    this.result = n1 / n2;
  }

} */
