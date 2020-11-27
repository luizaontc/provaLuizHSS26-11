import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './views/produto/cadastrar/cadastrar.component';
import { ListarComponent } from './views/produto/listar/listar.component';

const routes: Routes = [{
  path:'',
  component: ListarComponent
},
{
  path:'produto/cadastrar',
  component: CadastrarComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
