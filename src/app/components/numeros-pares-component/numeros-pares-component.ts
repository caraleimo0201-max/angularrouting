import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-numeros-pares-component',
  standalone: false,
  styleUrl: './numeros-pares-component.css',
  templateUrl: './numeros-pares-component.html',
})
export class NumerosParesComponent {
  @ViewChild("cajainicio") cajainicio!: ElementRef;
  @ViewChild("cajafinal") cajafin!: ElementRef;
  arrayNumeros!: number[];

  mostrarPares(): void {
    //debemos recuperar el número de inicio de la caja y recuperamos el número de final de la caja
    let inicio = parseInt(this.cajainicio.nativeElement.value);
    let fin = parseInt(this.cajafin.nativeElement.value);
    //necesito un bucle for desde el inicio hasta el fin
    for (let i = inicio; i <= fin; i++){
      //preguntamos si el número que estamos recorriendo es par  
      if (i % 2 == 0){
        //añadimos el número al array
        this.arrayNumeros.push(i);
      }

    }
  }
}
