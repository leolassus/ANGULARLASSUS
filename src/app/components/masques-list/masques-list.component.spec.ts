import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasquesListComponent } from './Masques-list.component';

describe('MasquesListComponent', () => {
  let component: MasquesListComponent;
  let fixture: ComponentFixture<MasquesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasquesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasquesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
