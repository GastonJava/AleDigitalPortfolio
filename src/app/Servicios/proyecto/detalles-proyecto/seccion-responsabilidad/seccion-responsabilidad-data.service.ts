import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeccionResponsabilidadDataService {
  public seccionResponsabilidad: any[] = [
    {
      id: 1,
      mifuncionTitulo:
      'Diseñador y desarrollador web del portfolio.',
      responsabilidadTitulo:
      'Realizar diseño de esquemas en papel y digitales junto al desarrollo web adaptativo.',
    },
    {
      id: 2,
      mifuncionTitulo:
        'Diseñador de UX que dirige el diseño de la pagina “AdoptApp" desde el concepto hasta la entrega.',
      responsabilidadTitulo:
        'Realizar diseño de esquemas en papel y digitales junto al desarrollo web adaptativo.',
    },
  ];

  constructor() {}

  getSeccionResponsabilidad() {
    return this.seccionResponsabilidad;
  }
}
