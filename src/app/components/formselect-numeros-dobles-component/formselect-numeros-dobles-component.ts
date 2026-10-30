import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formselect-numeros-dobles-component',
  standalone: false,
  styleUrl: './formselect-numeros-dobles-component.css',
  templateUrl: './formselect-numeros-dobles-component.html',
})
export class FormselectNumerosDoblesComponent {
  @ViewChild("selectnumero") selectnumero!: ElementRef;
  doble: number;
  arrayNumeros: number[] ;
  constructor() {
    this.doble = 0;
    this.arrayNumeros = [];
  }
  generarNumero() : void {
    let numero = Math.floor(Math.random() * 1000) + 1;
    this.arrayNumeros.push (numero);
    
  }
mostrarDoble(): void{
  let numero = (this.selectnumero.nativeElement.value);
  this.doble = numero * 2;

}

}
