import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { HomeComponent } from './features/home/home.component';
import { CustomersComponent } from './features/customers/customers.component';
import { PolicyTypesComponent } from './features/policy-types/policy-types.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'policy-types', component: PolicyTypesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Use RouterModule to define routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
