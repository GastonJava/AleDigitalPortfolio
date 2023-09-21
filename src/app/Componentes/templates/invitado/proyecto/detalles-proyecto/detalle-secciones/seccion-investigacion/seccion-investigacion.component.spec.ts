import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionInvestigacionComponent } from './seccion-investigacion.component';

describe('SeccionInvestigacionComponent', () => {
  let component: SeccionInvestigacionComponent;
  let fixture: ComponentFixture<SeccionInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionInvestigacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
