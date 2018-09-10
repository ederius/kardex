import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PanelLoginComponent } from './panel-login.component';
import { ReactiveFormsModule } from "@angular/forms";

import { AutenticacionService } from "../../services/autenticacion.service";

describe('PanelLoginComponent', () => {
  let component: PanelLoginComponent;
  let fixture: ComponentFixture<PanelLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ PanelLoginComponent ],
      providers: [AutenticacionService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
