import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaiementComponent } from './paiement/paiement.component';
import { EventComponent } from './event/event.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { FactureComponent } from './facture/facture.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    NavbarComponent,
    ReservationComponent,
    PaiementComponent,
    EventComponent,
    FormComponent,
    FactureComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    RegisterComponent,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
