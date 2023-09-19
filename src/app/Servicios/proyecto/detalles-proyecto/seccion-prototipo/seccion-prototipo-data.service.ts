import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeccionPrototipoDataService {

  public seccionPrototipo: any[] = [
    {
      id: 1,
      img: 'proyecto3.png',
      url: 'https://xd.adobe.com/view/37942285-98da-49b0-be9c-f294a9c49e68-62c7/'
    },

    {
      id: 2,
      img: 'perro.png',
      url: 'https://xd.adobe.com/view/37942285-98da-49b0-be9c-f294a9c49e68-62c7/'
    },
  ];

  constructor() { }

  getprototipoDatos(){
    return this.seccionPrototipo;
  }

}
