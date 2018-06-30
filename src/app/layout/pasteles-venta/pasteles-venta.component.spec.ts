import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelesVentaComponent } from './pasteles-venta.component';

describe('PastelesVentaComponent', () => {
  let component: PastelesVentaComponent;
  let fixture: ComponentFixture<PastelesVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastelesVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastelesVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
