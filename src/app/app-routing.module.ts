import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';

const routes: Routes = [
  { path: 'listarViagem', component: ListagemViagemComponent },
  { path: 'cadastroViagem', component: CadastroViagemComponent},
  { path: 'detalhesViagem/:id', component: DetalhesViagemComponent},
  { path: 'excluirViagem/:id', component: ExclusaoViagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
