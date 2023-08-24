import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselPersonasComponent } from './carusel-personas.component';

describe('CaruselPersonasComponent', () => {
  let component: CaruselPersonasComponent;
  let fixture: ComponentFixture<CaruselPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaruselPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaruselPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
