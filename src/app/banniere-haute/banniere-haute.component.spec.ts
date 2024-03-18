import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanniereHauteComponent } from './banniere-haute.component';

describe('BanniereHauteComponent', () => {
  let component: BanniereHauteComponent;
  let fixture: ComponentFixture<BanniereHauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanniereHauteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanniereHauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
