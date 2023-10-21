import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importações das páginas
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

// Rotas: Para acessar um determinado componente (é passado por meio de objeto)
const routes: Routes = [
  // path = rota
  // component = componente que será renderizado ao acessar a rota em questão
  {
    path: '',
    component: HomeComponent,
  },
  {
    // :id => a rota recebe um parâmetro
    path: 'content/:id',
    component: ContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
