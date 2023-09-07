import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionResumenComponent } from './seccion-resumen.component';

describe('SeccionResumenComponent', () => {
  let component: SeccionResumenComponent;
  let fixture: ComponentFixture<SeccionResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionResumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
