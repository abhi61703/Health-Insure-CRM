import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyTypesComponent } from './policy-types.component';

describe('PolicyTypesComponent', () => {
  let component: PolicyTypesComponent;
  let fixture: ComponentFixture<PolicyTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
