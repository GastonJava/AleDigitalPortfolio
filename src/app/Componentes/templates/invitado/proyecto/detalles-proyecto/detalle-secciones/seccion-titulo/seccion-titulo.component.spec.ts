import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTituloComponent } from './seccion-titulo.component';

describe('SeccionTituloComponent', () => {
  let component: SeccionTituloComponent;
  let fixture: ComponentFixture<SeccionTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
