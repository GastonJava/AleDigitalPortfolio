import {
  AfterViewInit,
  Component,
  ElementRef,
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
  @ViewChild('imageElement') imageElement!: ElementRef;
  @ViewChild('containerimg') containerimg!: ElementRef;
  @ViewChild('h3') h3!: ElementRef; 

  // Asignar la fuente de la imagen
  imagesource = '../../../../../assets/Proyecto/detalle-proyecto/adoptapp2.png';

  constructor(
    private el: ElementRef,
    private seccionPrototipoEstilosDirective: SeccionPrototipoEstilosDirective
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
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
    
    image.src = this.imagesource;
  }

  redirigirPrototipo() {
    const url =
      'https://xd.adobe.com/view/37942285-98da-49b0-be9c-f294a9c49e68-62c7/';
    window.open(url, '_blank');
  }
}
