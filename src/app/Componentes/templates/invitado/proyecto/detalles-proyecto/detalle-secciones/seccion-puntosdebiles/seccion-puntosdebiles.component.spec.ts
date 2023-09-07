import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPuntosdebilesComponent } from './seccion-puntosdebiles.component';

describe('SeccionPuntosdebilesComponent', () => {
  let component: SeccionPuntosdebilesComponent;
  let fixture: ComponentFixture<SeccionPuntosdebilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionPuntosdebilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionPuntosdebilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
