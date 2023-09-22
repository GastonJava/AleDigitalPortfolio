import { Injectable } from '@angular/core';
import { EducacionDataService } from './educacion/educacion-data.service';

@Injectable({
  providedIn: 'root'
})
export class InvitadoDataService {

constructor( private educacionService: EducacionDataService,) { }

 getDatosInvitado(invitadoId: number) {
  const educacionData = this.educacionService.getEducacionData();

  return {
    educacionData: educacionData.find(educacion => educacion.id === invitadoId),
  }
 }

}
