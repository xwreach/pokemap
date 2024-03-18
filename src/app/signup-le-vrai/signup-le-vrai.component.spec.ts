import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLeVraiComponent } from './signup-le-vrai.component';

describe('SignupLeVraiComponent', () => {
  let component: SignupLeVraiComponent;
  let fixture: ComponentFixture<SignupLeVraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupLeVraiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupLeVraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
