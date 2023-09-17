import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapaRecorridoDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-carusel/mapa-recorrido/mapa-recorrido-data.service';
import { MetasDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-carusel/metas/metas-data.service';
import { PersonasDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-carusel/personas/personas-data.service';
import { RecorridoDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-carusel/recorrido/recorrido-data.service';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss'],
})
export class CaruselComponent implements OnInit, AfterViewInit {

  @Input() caruselid: any;

  personasData: any;
  metasData: any;
  recorridoData: any;
  mapaRecorridoData: any;

  mapaRecorridoDataArray: any;

  constructor(
    private personasDataService: PersonasDataService,
    private metasDataService: MetasDataService,
    private recorridoDataService: RecorridoDataService,
    private mapaRecorridoDataService: MapaRecorridoDataService
    ) {}

  ngOnInit(): void {

    // Obtén la lista de proyectos desde el servicio
    const caruselPersonaData = this.personasDataService.getPersonasDatos();
    const caruselMetasData = this.metasDataService.getMetasDatos();
    const caruselRecorridoData = this.recorridoDataService.getRecorridoDatos();
    const caruselMapaRecorridoData = this.mapaRecorridoDataService.getmapaRecorridoDatos();


    // Busca el proyecto correspondiente en la lista detalledatos
    this.personasData = caruselPersonaData.find( persona => persona.id == this.caruselid);
    this.metasData = caruselMetasData.find( metas => metas.id == this.caruselid);
    this.recorridoData = caruselRecorridoData.find( recorrido => recorrido.id == this.caruselid);
    this.mapaRecorridoData = caruselMapaRecorridoData.find( maparecorrido => maparecorrido.id === this.caruselid);
    this.mapaRecorridoDataArray = Array.of(this.mapaRecorridoData);
    console.log(this.mapaRecorridoDataArray);
  }

  ngAfterViewInit() {}

  ngOnDestroy() {}
}
