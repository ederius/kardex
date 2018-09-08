import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInventarioComponent } from './panel-inventario.component';

describe('PanelInventarioComponent', () => {
  let component: PanelInventarioComponent;
  let fixture: ComponentFixture<PanelInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
