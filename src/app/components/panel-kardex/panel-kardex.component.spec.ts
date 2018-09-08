import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelKardexComponent } from './panel-kardex.component';

describe('PanelKardexComponent', () => {
  let component: PanelKardexComponent;
  let fixture: ComponentFixture<PanelKardexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelKardexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
