import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPedidoComponent } from './validar-pedido.component';

describe('ValidarPedidoComponent', () => {
  let component: ValidarPedidoComponent;
  let fixture: ComponentFixture<ValidarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
