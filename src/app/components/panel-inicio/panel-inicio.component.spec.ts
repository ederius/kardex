import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInicioComponent } from './panel-inicio.component';

describe('PanelInicioComponent', () => {
  let component: PanelInicioComponent;
  let fixture: ComponentFixture<PanelInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
