import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { CommandeDetailsComponent } from './commande-details/commande-details.component';
import { NewCommandDialogComponent } from './new-command-dialog/new-command-dialog.component';
import {UpdateComponent} from './update/update.component'
const routes: Routes = [
  { path: '', component: CommandeComponent },
  { path: 'commandes-list', component: CommandeComponent },
  { path: 'commandes-details', component: CommandeDetailsComponent },
  {path:'ajouter-commande', component:NewCommandDialogComponent},
  {path:'update-commande/:id', component:UpdateComponent},
  { path: '**', redirectTo: 'list-commandes' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
