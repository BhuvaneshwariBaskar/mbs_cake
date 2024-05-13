import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakecardsComponent } from './cakecards.component';

describe('CakecardsComponent', () => {
  let component: CakecardsComponent;
  let fixture: ComponentFixture<CakecardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakecardsComponent]
    });
    fixture = TestBed.createComponent(CakecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
