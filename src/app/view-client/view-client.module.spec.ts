import { ViewClientModule } from './view-client.module';

describe('ViewClientModule'{
  let viewClientModule: ViewClientModule;

  beforeEach(() =>{
    viewClientModule= new ViewClientModule();
  });

  it('should create an instance', ()=>{
    expect(viewClientModule.toBeTruthy());
  });
});
