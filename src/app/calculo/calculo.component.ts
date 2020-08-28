import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
    edadUno:number=0.0;
    edadDos:number=0.0;

    promedio:number = 0.0;
    suma:number = 0.0; 

  constructor() { }

  ngOnInit(): void {
  }
  
  calcular() {
    this.promedio = (this.edadUno + this.edadDos)/2.0;
    this.suma = this.edadUno + this.edadDos;
  }


}
