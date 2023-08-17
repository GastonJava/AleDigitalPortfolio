import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServidorCaidoComponent } from './servidor-caido/servidor-caido.component';



@NgModule({
    declarations: [ ServidorCaidoComponent,],
    exports: [ ServidorCaidoComponent],
    imports: [
      CommonModule,
    ]
})
export class TemplatesModule { }
