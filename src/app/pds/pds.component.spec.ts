import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdsComponent } from './pds.component';

describe('PdsComponent', () => {
  let component: PdsComponent;
  let fixture: ComponentFixture<PdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
