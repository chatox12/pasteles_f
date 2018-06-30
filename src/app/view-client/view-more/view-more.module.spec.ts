import { ViewMoreModule } from './view-more.module';

describe('ViewMoreModule', () =>{
  let viewmoreComponent: ViewMoreComponent;

  beforeEacj(() =>{
    viewmoreComponent = new ViewMoreModule();
  });

  it('should create an instance', () =>{
    expect(viewmoreComponent).toBeTruthy();
  });

});
