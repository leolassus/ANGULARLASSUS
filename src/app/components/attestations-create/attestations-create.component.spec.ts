import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationsCreateComponent } from './Attestations-create.component';

describe('AttestCreateComponent', () => {
  let component: AttestationsCreateComponent;
  let fixture: ComponentFixture<AttestationsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttestationsCreateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
