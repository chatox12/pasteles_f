import { RecoverpassModule } from './recoverpass.module';

describe('RecoverpassModule', () =>{
  let recoverpassModule: RecoverpassModule;

  beforeEach(() => {
    recoverpassModule = new RecoverpassModule();
  });

  it('should create an instance', () =>{
    expect(recoverpassModule).toBeTruthy();
  });
});
