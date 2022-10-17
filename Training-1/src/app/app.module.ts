import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  jubairEmployeeComponent } from './jubairemployee/jubairemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    jubairEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([{
      path:'employee',
      component:jubairEmployeeComponent,
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
