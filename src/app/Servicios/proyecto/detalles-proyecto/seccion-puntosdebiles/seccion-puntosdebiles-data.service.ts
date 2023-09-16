import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeccionPuntosdebilesDataService {
  public seccionPuntosdebiles: any[] = [
    {
      id: 1,
      puntosdebilesNavegacion:
        'Navegación poco clara que hace que los visitantes tengan dificultades para encontrar lo que están buscando. ',
      puntosdebilesInteraccion:
        'Falta de Enganche: La interacción es una forma efectiva de involucrar a los visitantes y mantener su atención.',
      puntosdebilesExp:
        'Portfolio web no proporcionan una experiencia de navegación atractiva.',
    },
    {
      id: 2,
      puntosdebilesNavegacion:
        'Los usuarios se frustran al no poder encontrar mascotas en su refugio local.',
      puntosdebilesInteraccion:
        'Algunos usuarios experimentaron que la transicion de imágenes eran muy rapido y confuso',
      puntosdebilesExp:
        'Al navegar entre diferentes paginas puede resultar confuso el flujo de navegacion.',
    },
  ];

  constructor() {}

  getSeccionPuntosdebiles(){
    return this.seccionPuntosdebiles;
  }
}
