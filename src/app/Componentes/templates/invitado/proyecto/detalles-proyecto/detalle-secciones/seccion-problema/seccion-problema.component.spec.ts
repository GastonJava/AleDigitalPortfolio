import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionProblemaComponent } from './seccion-problema.component';

describe('SeccionProblemaComponent', () => {
  let component: SeccionProblemaComponent;
  let fixture: ComponentFixture<SeccionProblemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionProblemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
