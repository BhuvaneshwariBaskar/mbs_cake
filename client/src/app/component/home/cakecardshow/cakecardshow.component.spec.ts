import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakecardshowComponent } from './cakecardshow.component';

describe('CakecardshowComponent', () => {
  let component: CakecardshowComponent;
  let fixture: ComponentFixture<CakecardshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakecardshowComponent]
    });
    fixture = TestBed.createComponent(CakecardshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
