import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-seccion-titulo',
  templateUrl: './seccion-titulo.component.html',
  styleUrls: ['./seccion-titulo.component.scss'],
})
export class SeccionTituloComponent {

  buttonClicked: boolean = false;

  @Input() datosTitulo: any;

  @Output() scrollToResumenEvent = new EventEmitter<void>();

  ngOnInit() {
    //console.log('recibio seccion-titulo?: '+JSON.stringify(this.seccionTituloData));
  }

  // Método para notificar al componente principal que se debe desplazar al resumen
  scrollToResumen() {
    console.log("hice click en el boton");
    this.scrollToResumenEvent.emit();

    this.buttonClicked = true;
    setTimeout(() => {
      this.buttonClicked = false;
    }, 2000); // Establece el tiempo en milisegundos según tus preferencias
  }

}
