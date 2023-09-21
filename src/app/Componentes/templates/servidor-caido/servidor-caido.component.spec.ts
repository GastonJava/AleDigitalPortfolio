import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidorCaidoComponent } from './servidor-caido.component';

describe('ServidorCaidoComponent', () => {
  let component: ServidorCaidoComponent;
  let fixture: ComponentFixture<ServidorCaidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServidorCaidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServidorCaidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
