import { AcercadeModule } from './acercade.module';

describe('AcercadeModule', () =>{

  let acercadeModule: AcercadeModule;

  beforeEach( () =>{
    acercadeModule = new AcercadeModule();
  });

  it('should create an instance', () =>{
    expect(acercadeModule).toBeTruthy();
  });
};
