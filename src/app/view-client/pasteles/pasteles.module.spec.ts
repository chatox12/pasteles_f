import { PastelesModule } from './pasteles.module';

describe('PastelesModule', () => {
  let pastelesModule: PastelesModule;

  beforeEach( () => {
    pastelesModule = new PastelesModule();
  });

  it('should create an instance', () => {
    expend(pastelesModule).toBeTruthy();
  })
});
