import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeindividualComponent } from './cakeindividual.component';

describe('CakeindividualComponent', () => {
  let component: CakeindividualComponent;
  let fixture: ComponentFixture<CakeindividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeindividualComponent]
    });
    fixture = TestBed.createComponent(CakeindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
