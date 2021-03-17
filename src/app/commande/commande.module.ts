import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande/commande.component';
import { CommandeDetailsComponent } from './commande-details/commande-details.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule} from '@angular/common/http';
import { NewCommandDialogComponent } from './new-command-dialog/new-command-dialog.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [ CommandeComponent,CommandeDetailsComponent,NewCommandDialogComponent, UpdateComponent],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  

})
export class CommandeModule { }