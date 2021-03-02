import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result : number = 0
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

}
