import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.scss']
})
export class InvitadoComponent implements OnInit {

  
  @ViewChild('seccionheaderEl', { static: false }) seccionheaderEl!: ElementRef;
  @ViewChild('seccionsobremiEl', { static: false }) seccionsobremiEl!: ElementRef;
  @ViewChild('seccioneducacionEl', { static: false }) seccioneducacionEl!: ElementRef;
  @ViewChild('seccionhardsoftEl', { static: false }) seccionhardsoftEl!: ElementRef;
  @ViewChild('seccionproyectoEl', { static: false }) seccionproyectoEl!: ElementRef;
  @ViewChild('seccionfooterEL', { static: false }) seccionfooterEL!: ElementRef;


  //@ViewChild('animatedElement', { static: false }) animatedElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
    this.ConfigurarIntersectionObserve(this.seccionheaderEl, "slide-in-left");
    this.ConfigurarIntersectionObserve(this.seccionsobremiEl, "slide-in-right");
    this.ConfigurarIntersectionObserve(this.seccioneducacionEl, "slide-in");
    this.ConfigurarIntersectionObserve(this.seccionhardsoftEl, "slide-out");
    this.ConfigurarIntersectionObserve(this.seccionproyectoEl, "slide-out");
    this.ConfigurarIntersectionObserve(this.seccionfooterEL, "slide-out");

  }

  private ConfigurarIntersectionObserve (sectionRef: ElementRef, animacionClase: string) {

    if(sectionRef){
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Porcentaje de visibilidad para disparar la animación
      };
  
      const observer = new IntersectionObserver(entries => {
  
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Agregar la clase de animación cuando el elemento esté en el viewport
            sectionRef.nativeElement.classList.add(animacionClase);
            observer.unobserve(entry.target);
           //observer.disconnect();
            
          }
          
          /*else {
            sectionRef.nativeElement.classList.remove(animacionClase);
            
          } */
        });
      }, options);
  
      // Observar el elemento deseado
      observer.observe(sectionRef.nativeElement);
    }
    
  }

}