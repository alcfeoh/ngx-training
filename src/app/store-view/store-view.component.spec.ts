import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreViewComponent } from './store-view.component';

describe('StoreViewComponent', () => {
  let component: StoreViewComponent;
  let fixture: ComponentFixture<StoreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
