import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appSeccionPrototipoEstilos]',
})
export class SeccionPrototipoEstilosDirective {
  @Output() imageLoaded = new EventEmitter<void>();

  @ViewChild('imageElement') imageElement!: ElementRef;
  @ViewChild('containerimg') containerimg!: ElementRef;
  @ViewChild('h3') h3!: ElementRef; // Agregar ViewChild para el elemento h3

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const image = this.imageElement.nativeElement;
    const mainDiv = this.containerimg.nativeElement;

      const dominantColor = this.getColorDominante(image);

      // Calcular el color complementario
      const complementaryColor =
        this.calculateComplementaryColor(dominantColor);

      // Aplicar el color complementario como fondo del div main-prototipo
      mainDiv.style.backgroundColor = complementaryColor;

      // Aplicar el color complementario como color de texto del h3
      this.h3.nativeElement.style.color = `rgb(${dominantColor.join(',')})`;
    //};

  }

  getColorDominante(image: HTMLImageElement): number[] {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx!.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Obtener el color dominante como un arreglo [r, g, b]
    const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height).data;
    const colorCounts: any = {};

    for (let i = 0; i < imageData.length; i += 4) {
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];
      const color = `${r},${g},${b}`;
      colorCounts[color] = colorCounts[color] ? colorCounts[color] + 1 : 1;
    }

    const dominantColor = Object.keys(colorCounts)
      .reduce((a, b) => (colorCounts[a] > colorCounts[b] ? a : b))
      .split(',')
      .map(Number);

    return dominantColor;
  }

  calculateComplementaryColor(color: number[]): string {
    // Calcular el color complementario (inverso)
    const complementaryColor = color.map((c) => 255 - c);
    return `rgb(${complementaryColor.join(',')})`;
  }
}
