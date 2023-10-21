import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.responsive.component.css',
  ],
})
export class BigCardComponent implements OnInit {
  // Propriedades para deixar os elementos dinâmicos
  @Input() // o @Input() permite que o usuário insira o valor que deseja na propriedade ao chamar o componente
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';
  
  // Utilizado para pegar o Id do conteúdo e passar para rota - type string, porque não será realizado cálculo - 
  @Input()
  Id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
