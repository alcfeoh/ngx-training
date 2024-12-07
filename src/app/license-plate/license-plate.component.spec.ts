import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateComponent } from './license-plate.component';

describe('LicensePlateComponent', () => {
  let component: LicensePlateComponent;
  let fixture: ComponentFixture<LicensePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LicensePlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
