import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationsListComponent } from './Attestations-list.component';

describe('AttestListComponent', () => {
  let component: AttestationsListComponent;
  let fixture: ComponentFixture<AttestationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttestationsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
