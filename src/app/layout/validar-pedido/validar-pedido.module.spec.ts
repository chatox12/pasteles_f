import { ValidarPedidoRoutingModule } from './validar-pedido.module';

describe('ValidarPedidoModule', () => {

  let validarPedidoModule: ValidarPedidoModule();

  beforeEach(() => {
    validarPedidoModule = new ValidarPedidoModule();
  });

  it('should create an instance', () => {
    expect(validarPedidoModule).toBeTruthy();
  });

});
