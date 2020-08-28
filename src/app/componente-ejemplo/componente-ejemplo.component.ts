import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-ejemplo',
  templateUrl: './componente-ejemplo.component.html',
  styleUrls: ['./componente-ejemplo.component.css']
})
export class ComponenteEjemploComponent implements OnInit {

  
  public ejemplo = 'Hola Mundo';
  public ejemplo2 = 'Hola Mundo';
  
  constructor() { }

  ngOnInit(): void {

  }
  
  PruebaClick() {
    this.ejemplo2 = 'Ejecutamos el evento!!!';
  }


}
