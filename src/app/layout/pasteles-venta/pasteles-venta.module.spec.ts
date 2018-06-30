import { PastelesVentaModule } from './pasteles-venta.module';

describe('PastelesVentaModule', () => {

    let pastelesVentaModule: PastelesVentaModule;

    beforeEach(() => {
      pastelesVentaModule = new PastelesVentaModule();
    });

    it('should create an instance', () => {
      expect(pastelesVentaModule).toBeTruthy();
    });


});
