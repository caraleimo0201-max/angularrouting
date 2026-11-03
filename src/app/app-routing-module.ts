import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';
import { HomeComponent } from './components/home-component/home-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { NumerosParesComponent } from './components/numeros-pares-component/numeros-pares-component';

import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';
import { FormselectNumerosDoblesComponent } from './components/formselect-numeros-dobles-component/formselect-numeros-dobles-component';
import {NumeroDobleComponentComponent} from './components/numero-doble-component-component/numero-doble-component-component';





const routes: Routes = [
  {path: 'doble', component: NumeroDobleComponentComponent}, //con params
  {path: "doble/:numero", component: NumeroDobleComponentComponent,},//Sin params
  {path: 'musica', component: MusicaComponent },
  {path: 'cine', component : CineComponent},
  {path: '', component : HomeComponent},
  {path: "pares", component: NumerosParesComponent},
  {path: 'tabla', component : TablaMultiplicarComponent},
  {path: 'selectnumeros', component: FormselectNumerosDoblesComponent},
  {path: '**', component : NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
