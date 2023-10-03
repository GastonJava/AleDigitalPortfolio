import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetasDataService {

  public metasDatos: any[] = [
    {
      id: 1,
      metas_li1: 'Mejorar navegacion entre paginas.',
      metas_li2: 'Mejorar el performance de las animaciones.',
      metas_li3: 'Mejorar la transicion entre colores.',

      frustracion_li1: 'No se entiende la navegabilidad entre paginas.',
      frustracion_li2: 'Las animcaiones son lentas.',
      frustracion_li3: 'No se aprecia bien el texto.',
      cita: 'La Programacion y la UX es mi pasion',

    },

    {
      id: 2,
      metas_li1: 'El cuestionario debe ser accesible en línea, no limitado solo a formato presencial.',
      metas_li2: 'Posibilidad de elegir el local más cercano mediante un mapa interactivo.',
      metas_li3: 'Opción de elegir entre gatos o perros en el menú de selección.',

      frustracion_li1: 'Es frustrante que no pueda filtrar por gatos o perros en el menú de selección.',
      frustracion_li2: 'Decepción por la necesidad de descargar la aplicación móvil para poder utilizarla en el dispositivo.',
      frustracion_li3: 'No hay una seccion con Preguntas y respuestas FAQ.',
      cita: 'No Compres Mascotas, Adopta',
    },

    {
      id: 3,
      metas_li1: 'Aspira a organizar eventos que dejen una impresión duradera en los asistentes.',
      metas_li2: 'Quiere expandir su red de contactos en la industria de eventos.',
      metas_li3: 'Tiene como meta establecer su propia marca en la industria de eventos.',

      frustracion_li1: 'La falta de presupuesto a veces limita su capacidad para realizar eventos tan grandes o impactantes como le gustaría.',
      frustracion_li2: 'La falta de colaboración o apoyo de ciertos proveedores, artistas o socios potenciales a veces puede obstaculizar sus esfuerzos.',
      frustracion_li3: 'La naturaleza competitiva de la industria de eventos puede ser frustrante.',
      cita: 'En cada evento, veo una oportunidad para crear algo verdaderamente especial.',
    },

    
  ];

  constructor() { }

  getMetasDatos(){
    return this.metasDatos;
  }

}
