import { IndexModule } from './index.module';

describe('IndexModule', () => {
  let indexModule: IndexModule

  beforeEach( () => {
    IndexModule = new IndexModule();
  });

  it('should create an instance', () => {
    expect(indexModule).toBeTruthy();
  });

});
