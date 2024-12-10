import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
    { label: 'Customers', icon: 'pi pi-users', routerLink: '/customers' },
    { label: 'Policy Types', icon: 'pi pi-briefcase', routerLink: '/policy-types' },
    { label: 'Contact Us', icon: 'pi pi-envelope', routerLink: '/contact-us' }
  ];
}
