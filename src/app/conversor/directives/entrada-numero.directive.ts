import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[EntradaNumero]'
})
export class EntradaNumeroDirective {

  constructor() { }

  /**
   * Implementa evento de keyup para o elemento da diretiva.
   * 
   * @param $event any
   */
  @HostListener('keyup',['$event'])
  onKeyUp($event:any) {
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substr(0,posDecimais) + '.' + valor.suvstr(posDecimais);
    }
    $event.target.value = valor;
    //this.onChange(valor);
  }

}
