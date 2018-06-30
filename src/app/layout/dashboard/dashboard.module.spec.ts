import { DashboardModule } from './dashboard.module';

describe('DashboardModule', ()=> {
  let dashboardModule: DashboardModule;

  beforeEach(() => {
    dashboard = new DashboardModule();
  });

  it('should create an instance', () => {
    expect(dashboard).toBeTruthy();
  });  
});
