import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomIconComponent } from './axiom-icon.component';

describe('AxiomIconComponent', () => {
  let component: AxiomIconComponent;
  let fixture: ComponentFixture<AxiomIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
