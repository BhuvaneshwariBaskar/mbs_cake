import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustpointsComponent } from './trustpoints.component';

describe('TrustpointsComponent', () => {
  let component: TrustpointsComponent;
  let fixture: ComponentFixture<TrustpointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrustpointsComponent]
    });
    fixture = TestBed.createComponent(TrustpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
