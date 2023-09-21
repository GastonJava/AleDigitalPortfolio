import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapaRecorridoDataService {

  public mapaRecorridoDatos: any[] = [
    {
      id: 1,
      actions: [
        'Ingresar a la pagina web.',
        'Navegacion de proyectos.',
        'Detalles de proyectos.'
      ],
      tasklist: [
        'Ir a la seccion proyectos.',
        'Presionar boton siguiente para navegar.',
        'Presionar en el proyecto y acceder a la seccion.'
      ],
      feelings: ['😄', '😃', '😕'],
      improvements: [
        'Agregarle animacion mas fluido.',
        'Mejorar la accesibilidad de los textos.',
        'Que el diseño sea mas adaptativo.'
      ]
    },
    {
      id: 2,
      actions: [
        'Buscar mascotas disponibles',
        'Escoger la mascota.',
        'Buscar informacion sobre mascota.',
        'Concertar un encuentro.',
        'Ir al refugio.'
      ],
      tasklist: [
        'A - Abrir pagina web, B - Buscar mascotas disponibles.',
        'A - Hacer click en la imagen de mascota.',
        'A - Leer la informacion detallado.',
        'A - Elegir fecha de encuentro, B - Confirmar encuentro.',
        'A - Ir al refugio, B - Conocer la mascota.'
      ],
      feelings: ['😄', '😃', '😕', '😕', '😃'],
      improvements: [
        'Agregar filtro de busquedas por perros o gatos.',
        'Informacion sobre estado de la mascota.',
        'Agregar informacion sobre comida favorita.',
        'Enviar recordatorio de encuentro.',
        'Mostrar direccion en el mapa.'
      ]
    }
  ];

  /*
  public mapaRecorridoDatos: any[] = [
    {
      id: 1,
      action_1: 'Ingresar a la pagina web.',
      action_2: 'Navegacion de proyectos.',
      action_3: 'Detalles de proyectos.',

      tasklist_1: 'Ir a la seccion proyectos.',
      tasklist_2: 'Presionar boton siguiente para navegar.',
      tasklist_3: 'Presionar en el proyecto y acceder a la seccion.',

      feeling_1: '😄',
      feeling_2: '😃',
      feeling_3: '😕',

      improvement_1: 'Agregarle animacion mas fluido.',
      improvement_2: 'Mejorar la accesibilidad de los textos.',
      improvement_3: 'Que el diseño sea mas adaptativo.',

    },
    {
      id: 2,
      action_1: 'Buscar mascotas disponibles',
      action_2: 'Escoger la mascota.',
      action_3: 'Buscar informacion sobre mascota.',
      action_4: 'Concertar un encuentro.',
      action_5: 'Ir al refugio.',

      tasklist_1: 'A - Abrir pagina web, B - Buscar mascotas disponibles.',
      tasklist_2: 'A - Hacer click en la imagen de mascota.',
      tasklist_3: 'A - Leer la informacion detallado.',
      tasklist_4: 'A - Elegir fecha de encuentro, B - Confirmar encuentro.',
      tasklist_5: 'A - Ir al refugio, B - Conocer la mascota.',

      feeling_1: '😄',
      feeling_2: '😃',
      feeling_3: '😕',
      feeling_4: '😕',
      feeling_5: '😃',

      improvement_1: 'Agregar filtro de busquedas por perros o gatos.',
      improvement_2: 'Informacion sobre estado de la mascota.',
      improvement_3: 'Agregar informacion sobre comida favorita.',
      improvement_4: 'Enviar recordatorio de encuentro.',
      improvement_5: 'Mostrar direccion en el mapa.',

    },
  ] */

  constructor() { }

  getmapaRecorridoDatos(){
    return this.mapaRecorridoDatos;
  }

}
