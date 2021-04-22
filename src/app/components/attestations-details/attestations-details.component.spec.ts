import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationsDetailsComponent } from './Attestations-details.component';

describe('AttestDetailsComponent', () => {
  let component: AttestationsDetailsComponent;
  let fixture: ComponentFixture<AttestationsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttestationsDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
