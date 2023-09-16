import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeccionInvestigacionDataService {
  public seccionInvestigacion: any[] = [
    {
      id: 1,
      investigacionTitulo:
        'convertí en mapas de empatía para comprender mejor al las necesidades del usuario. Descubrí que un portofolio ayuda a difundir y demostrar tus proyectos de manera dinamica e informativa. ',
    },
    {
      id: 2,
      investigacionTitulo:
        'Descubrí que los usuarios objetivo son personas que buscan una raza de mascota específica para adoptar.',
    },
  ];

  constructor() {}

  getSeccionInvestigacion(){
    return this.seccionInvestigacion;
  }
}
