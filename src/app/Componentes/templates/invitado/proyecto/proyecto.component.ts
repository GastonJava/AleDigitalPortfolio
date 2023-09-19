import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/detalles-proyecto-data.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent {

  public proyectoDatos: any[] = [
    {
      id: 1,
      nombre: 'Portfolio Ale',
      tecnologia: 'Angular 13',
      descripcion: 'Portfolio personal',
      img: 'proyecto3.png',
    },
    {
      id: 2,
      nombre: 'Adoptapp',
      tecnologia: 'Diseño UX/UI Figma',
      descripcion: 'Diseño de app de adopcion de mascotas.',
      img: 'img-adoptapp2.png',
    },
    // Agrega más objetos de proyecto según sea necesario
  ];

  constructor(private router: Router, private proyectoDataService: ProyectoDataService) { }

  redirectToDetallesProyecto(id: number) {
    console.log("este seria el id "+id);
    //this.proyectoDataService.setProyectoData(); // Almacena los datos del proyecto
    this.router.navigate(['/proyecto/detalles-proyecto', id]);
  }

}
