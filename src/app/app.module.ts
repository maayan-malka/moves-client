import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovesComponent } from './moves/moves.component';
import { CommonModule } from '@angular/common';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    MovesComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MdbCheckboxModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
