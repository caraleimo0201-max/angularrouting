import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component-component',
  standalone: false,
  styleUrl: './numero-doble-component-component.css',
  templateUrl: './numero-doble-component-component.html',
})
export class NumeroDobleComponentComponent implements OnInit {
  doble: number = 0;
  mensaje!: string;
  constructor(
    private _active : ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _router: Router
){}
  navegarToCasa(): void{
    this. _router.navigate(['/']);
    this._cdr

  }
  ngOnInit(): void {
    //EN ESTE METODO ES DONDE RECUPERAMOS LOS PARAMETROS
    this._active.params.subscribe(params => {
      // como el parametro es opcional, debemos preguntar si lo hemos recibido
      if(params['numero'] != undefined){
        this.doble = params['numero'] * 2;
      }else{
        this.mensaje = "No se ha recibido ningún parámetro";
      }
      
    });
  }
}
