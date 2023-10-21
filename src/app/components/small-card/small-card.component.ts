import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {

    // Propriedades para deixar os elementos dinâmicos
    @Input() // o @Input() permite que o usuário insira o valor que deseja na propriedade ao chamar o componente
    photoCover:string = '';
    @Input()
    cardTitle:string = '';
    
  // Utilizado para pegar o Id do conteúdo e passar para rota
    @Input()
    Id:string = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
