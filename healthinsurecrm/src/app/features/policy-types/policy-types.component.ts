import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-types',
  templateUrl: './policy-types.component.html',
  styleUrls: ['./policy-types.component.scss']
})
export class PolicyTypesComponent {
  policyOptions = [
    {
      label: 'Individual',
      details: 'Covers an individual under this policy.',
      icon: 'pi pi-user',
      isHovered: false
    },
    {
      label: 'Family',
      details: 'Covers all family members under this policy.',
      icon: 'pi pi-users',
      isHovered: false
    },
    {
      label: 'Senior Citizen',
      details: 'Designed for senior citizens with tailored benefits.',
      icon: 'pi pi-star',
      isHovered: false
    }
  ];

  hoverPolicy(policy: any) {
    policy.isHovered = true;
  }

  resetPolicy(policy: any) {
    policy.isHovered = false;
  }

  explorePolicy(policy: any): void {
    alert(`Exploring ${policy.label}!`);
  }
}
