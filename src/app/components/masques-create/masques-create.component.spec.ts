import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasquesCreateComponent } from './Masques-create.component';

describe('MasquesCreateComponent', () => {
  let component: MasquesCreateComponent;
  let fixture: ComponentFixture<MasquesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasquesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasquesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
