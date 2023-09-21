import { Injectable } from '@angular/core';
import { MapaRecorridoDataService } from './mapa-recorrido/mapa-recorrido-data.service';
import { MetasDataService } from './metas/metas-data.service';
import { PersonasDataService } from './personas/personas-data.service';
import { RecorridoDataService } from './recorrido/recorrido-data.service';

@Injectable({
  providedIn: 'root',
})
export class SeccionCaruselDataService {
  
  mapaRecorridoDataArray: any;

  constructor(
    private personasDataService: PersonasDataService,
    private metasDataService: MetasDataService,
    private recorridoDataService: RecorridoDataService,
    private mapaRecorridoDataService: MapaRecorridoDataService
  ) {}

  getDatosProyecto(caruselId: number) {
    // Obtén la lista de proyectos desde el servicio
    const caruselPersonaData = this.personasDataService.getPersonasDatos();
    const caruselMetasData = this.metasDataService.getMetasDatos();
    const caruselRecorridoData = this.recorridoDataService.getRecorridoDatos();
    const caruselMapaRecorridoData = this.mapaRecorridoDataService.getmapaRecorridoDatos();
    
    const mapaArrayLocal: any[] = Array.of(caruselMapaRecorridoData.find( maparecorrido => maparecorrido.id === caruselId ));

    console.log(caruselMapaRecorridoData);

    return {
      // Busca el proyecto correspondiente en la lista detalledatos
      caruselPersonaData: caruselPersonaData.find(
        (persona) => persona.id == caruselId
      ),
      caruselMetasData: caruselMetasData.find((metas) => metas.id == caruselId),
      caruselRecorridoData: caruselRecorridoData.find(
        (recorrido) => recorrido.id == caruselId
      ),

      mapaArray: mapaArrayLocal,
    };
  }
}
