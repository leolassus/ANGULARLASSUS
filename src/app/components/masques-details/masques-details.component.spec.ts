import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasquesDetailsComponent } from './Masques-details.component';

describe('MasquesDetailsComponent', () => {
  let component: MasquesDetailsComponent;
  let fixture: ComponentFixture<MasquesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasquesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasquesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
