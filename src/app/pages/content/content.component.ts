import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Dados fakes
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', 'content.responsive.component.css']
})
export class ContentComponent implements OnInit {

  // Propriedades para setar os valores do artigo
  photoCover:string = '';
  contentTitle:string = '';
  contentDescription:string = '';

  // Propriedade que será utilizada apenas nesta classe
  private id: string | null = '0';

  constructor(
    // Utilizado para recuperar o Id
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      // console.log(value.get("id"))

      // Atribui o valor do Id da notícia à propriedade id privada acima (Recupera o parâmetro)
      this.id = value.get('id') // Pode retornar uma string ou null
    )

    // Chama o método passando o parâmetro recuperado
    this.setValuesToComponent(this.id);
  }


  /*
  Pega os dados fakes e faz um filtro com base no id para pegar o artigo igual ao id passado via parâmetro
  */
  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0] 

    // console.log(result);

    // Seta os valores nos parÂmetros com base nos dados artigo dos dados fake
    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;

  }

}
