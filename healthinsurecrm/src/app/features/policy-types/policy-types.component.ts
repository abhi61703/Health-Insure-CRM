import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-types',
  templateUrl: './policy-types.component.html',
  styleUrls: ['./policy-types.component.scss']
})
export class PolicyTypesComponent {
  policyOptions = [
    { label: 'Health Insurance', value: 'health', isFlipped: false },
    { label: 'Life Insurance', value: 'life', isFlipped: false },
    { label: 'Travel Insurance', value: 'travel', isFlipped: false }
  ];

  selectedPolicy: any;

  flipCard(policy: any) {
    policy.isFlipped = true;
  }

  unflipCard(policy: any) {
    policy.isFlipped = false;
  }
}
