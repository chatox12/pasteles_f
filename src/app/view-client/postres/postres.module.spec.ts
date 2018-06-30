import { PostresModule } from './postres.module';

describe('PostresModule'){
  let postresModule: PostresModule;

  beforeEach(() =>{
      postresModule = new PostresModule();
  });

  it('should create an instance', () =>{
    expect(postresModule).tobeTruthy;
  });

});
