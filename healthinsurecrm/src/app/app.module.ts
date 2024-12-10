import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// PrimeNG Modules
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card'; 
import { ChipsModule } from 'primeng/chips';



// App Components and Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Feature Components
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CustomersComponent } from './features/customers/customers.component';
import { PolicyTypesComponent } from './features/policy-types/policy-types.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';

import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomersComponent,
    PolicyTypesComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    PanelModule,
    ToastModule,
    ToolbarModule,
    CardModule,
    ChipsModule
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}