import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionResponsabilidadComponent } from './seccion-responsabilidad.component';

describe('SeccionResponsabilidadComponent', () => {
  let component: SeccionResponsabilidadComponent;
  let fixture: ComponentFixture<SeccionResponsabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionResponsabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionResponsabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
