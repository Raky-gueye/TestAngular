import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import {MatSidenavModule} from  '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component' ;
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BodyComponent } from './body/body.component';
import { ApercuComponent } from './apercu/apercu.component';
import { AnalysesComponent } from './analyses/analyses.component';
import { VentesComponent } from './ventes/ventes.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ApercuComponent,
    AnalysesComponent,
    VentesComponent,SidenavComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,    HeaderComponent 


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
