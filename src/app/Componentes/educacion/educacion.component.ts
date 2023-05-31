import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit{

  botonactivado: string = "";

  ngOnInit(): void {
    this.botonactivado = "TODO";
  }

  setActivarBtn(boton: string){
    console.log(boton);
    this.botonactivado = boton;
  }

 

}
