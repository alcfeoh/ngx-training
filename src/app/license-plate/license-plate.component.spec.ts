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
    fixture.componentRef.setInput('plate', {
      _id: '1',
      onSale: false,
      picture: '',
      title: 'California 2010',
      price: 10,
      year: 2010,
      state: 'CA',
      description: 'A nice plate'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
