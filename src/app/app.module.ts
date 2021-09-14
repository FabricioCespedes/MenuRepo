import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material 
import {MatButtonModule} from '@angular/material/button';


import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CasadosComponent } from './components/casados/casados.component';
import { SopasComponent } from './components/sopas/sopas.component';
import { MariscosComponent } from './components/mariscos/mariscos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CasadosComponent,
    SopasComponent,
    MariscosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    CarouselModule 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
