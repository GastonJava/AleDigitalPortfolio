import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss'],
})
export class EducacionComponent implements OnInit {

  @Input() educacionData!: any;

  public cardsFiltradas: any[] = [];

  botonactivado: string = '';
  posicionFlecha: number = 0;

  offset: string = '0%';

  ngOnInit(): void {
    this.cardsFiltradas = this.educacionData;
    this.botonactivado = 'TODO';

    console.log(JSON.stringify(this.educacionData));
  }

  setActivarBtn(boton: string) {


    console.log(boton);
    this.botonactivado = boton;

    this.posicionFlecha = boton === 'TODO' ? 0 : 100; // Ajusta los valores de posición según tus necesidades

    if (boton === 'TODO') {
      this.cardsFiltradas = this.educacionData;
      this.offset = '0';
    } else if (boton === 'CURSO') {
      this.cardsFiltradas = this.educacionData.filter((item: any) => item.titulo === 'Curso');
      this.offset = '-50%';
    } else if (boton === 'OTRO') {
      this.cardsFiltradas = this.educacionData.filter((item: any) => item.titulo !== 'Curso');
      this.offset = '50%';
    }
  }
}
