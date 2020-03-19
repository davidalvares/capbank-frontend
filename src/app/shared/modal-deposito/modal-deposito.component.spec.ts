import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepositoComponent } from './modal-deposito.component';

describe('ModalDepositoComponent', () => {
  let component: ModalDepositoComponent;
  let fixture: ComponentFixture<ModalDepositoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDepositoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
