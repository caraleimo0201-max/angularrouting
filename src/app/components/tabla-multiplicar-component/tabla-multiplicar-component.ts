import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {
  @ViewChild("cajaIntroducir") cajaIntroducir!: ElementRef;
  arrayNumeros!: number[];

  constructor (){
    this.arrayNumeros = []
  }

  mostrarTabla(): void {
    let numero = parseInt(this.cajaIntroducir.nativeElement.value);
    for (let i = 1; i <= 10; i++) {
      this.arrayNumeros.push(numero * i);

    }

  }
}
