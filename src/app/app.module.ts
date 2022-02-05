import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovesComponent } from './moves/moves.component';
import { CommonModule } from '@angular/common';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { MoveDetailsComponent } from './moves/move-details/move-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/moves', pathMatch: 'full'},
  { path: 'moves', component: MovesComponent},
  { path: 'move-details/:id', component: MoveDetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MovesComponent,
    MoveDetailsComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MdbCheckboxModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
