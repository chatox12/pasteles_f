import { PanaderiaModule } from './panaderia.module';

describe('PanaderiaModule', () =>{

  let panaderiaModule: PanaderiaModule;

  beforeEach( () =>{
    panaderiaModule = new PanaderiaModule();
  });

  it('should create an instance', () =>{
    expect(panaderiaModule).toBeTruthy();
  });
};
