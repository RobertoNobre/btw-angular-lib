import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtwLibComponent } from './btw-lib.component';

describe('BtwLibComponent', () => {
  let component: BtwLibComponent;
  let fixture: ComponentFixture<BtwLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtwLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtwLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
