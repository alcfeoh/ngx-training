import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronComponent } from './jumbotron.component';
import { signal } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('JumbotronComponent', () => {
  let component: JumbotronComponent;
  let fixture: ComponentFixture<JumbotronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("title","Welcome to our store");
    fixture.componentRef.setInput("description","description");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right title', () => {
    let title = fixture.debugElement.query(By.css("h1")).nativeElement;
    expect(title.textContent).toBe("Welcome to our store");
  });
});
