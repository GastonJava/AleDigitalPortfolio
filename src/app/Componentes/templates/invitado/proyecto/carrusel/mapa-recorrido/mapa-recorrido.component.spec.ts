import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaRecorridoComponent } from './mapa-recorrido.component';

describe('MapaRecorridoComponent', () => {
  let component: MapaRecorridoComponent;
  let fixture: ComponentFixture<MapaRecorridoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaRecorridoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaRecorridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
