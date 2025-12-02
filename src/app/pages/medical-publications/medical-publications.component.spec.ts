import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalPublicationsComponent } from './medical-publications.component';

describe('MedicalPublicationsComponent', () => {
  let component: MedicalPublicationsComponent;
  let fixture: ComponentFixture<MedicalPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalPublicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
