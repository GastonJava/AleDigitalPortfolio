import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss'],
})
export class EducacionComponent implements OnInit {
  botonactivado: string = '';
  posicionFlecha: number = 0;

  offset: string = '0%';

  ngOnInit(): void {
    this.botonactivado = 'TODO';
  }

  setActivarBtn(boton: string) {
    console.log(boton);
    this.botonactivado = boton;

    this.posicionFlecha = boton === 'TODO' ? 0 : 100; // Ajusta los valores de posición según tus necesidades

    if (boton === 'TODO') {
      this.offset = '0';
    } else if (boton === 'CURSO') {
      this.offset = '-50%';
    } else if (boton === 'OTRO') {
      this.offset = '50%';
    }
  }
}
