import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { EntradaNumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';

@NgModule({
  declarations: [
    ConversorComponent,
    EntradaNumeroDirective,
    ModalCotacaoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MoedaService,
    ConversorService
  ],
  exports: [
    ConversorComponent
  ]
})
export class ConversorModule { }
