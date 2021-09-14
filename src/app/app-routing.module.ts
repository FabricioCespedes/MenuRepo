import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasadosComponent } from './components/casados/casados.component';
import { MariscosComponent } from './components/mariscos/mariscos.component';
import { MenuComponent } from './components/menu/menu.component';
import { SopasComponent } from './components/sopas/sopas.component';

const routes: Routes = [
  { path: '', component:MenuComponent},
  { path: 'sopas', component:SopasComponent},
  { path: 'casados', component:CasadosComponent},
  { path: 'mariscos', component:MariscosComponent},
  { path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
