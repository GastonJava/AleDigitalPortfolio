import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SeccionPrototipoEstilosDirective } from 'src/app/Directivas/seccion-prototipo-estilos.directive';

@Component({
  selector: 'app-seccion-prototipo',
  templateUrl: './seccion-prototipo.component.html',
  styleUrls: ['./seccion-prototipo.component.scss'],
})
export class SeccionPrototipoComponent implements OnInit, AfterViewInit {
  @Input() datosPrototipo!: any;

  @ViewChild('imageElement') imageElement!: ElementRef;
  @ViewChild('containerimg') containerimg!: ElementRef;
  @ViewChild('h3') h3!: ElementRef;

  constructor(
    private el: ElementRef,
    private seccionPrototipoEstilosDirective: SeccionPrototipoEstilosDirective
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Asignar la fuente de la imagen desde detalle-proyecto-data.service.ts
    const imagesource = `../../../../../assets/Proyecto/detalle-proyecto/${this.datosPrototipo.img}`;

    const image = this.imageElement.nativeElement;
    const mainDiv = this.containerimg.nativeElement;

    image.onload = () => {
      // Utilizar los métodos de la directiva
      const dominantColor =
        this.seccionPrototipoEstilosDirective.getColorDominante(image);
      const complementaryColor =
        this.seccionPrototipoEstilosDirective.calculateComplementaryColor(
          dominantColor
        );

      // Aplicar el color complementario como fondo del div main-prototipo
      mainDiv.style.backgroundColor = complementaryColor;

      // Aplicar el color complementario como color de texto del h3
      this.h3.nativeElement.style.color = `rgb(${dominantColor.join(',')})`;
    };

    console.log(imagesource);
    image.src = imagesource;
  }

  redirigirPrototipo() {
    const url =
    `${this.datosPrototipo.url}`;
    window.open(url, '_blank');
  }
}