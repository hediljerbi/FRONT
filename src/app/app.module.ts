import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './theme/toolbar/toolbar.component';
import { SidenavComponent } from './theme/sidenav/sidenav.component';
import { TopnavComponent } from './theme/topnav/topnav.component';
import { MainContentComponent } from './theme/main-content/main-content.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  { path : 'patients', loadChildren: ()=> import ('./patient/patient.module').then(m=> m.PatientModule)}, 
  { path : 'commandes', loadChildren: ()=> import ('./commande/commande.module').then(m=> m.CommandeModule)}, //
  { path : 'home', component:MainContentComponent},
  { path : '**', redirectTo:'home'}

]
@NgModule({
  declarations: [
    ToolbarComponent, 
    SidenavComponent, 
    TopnavComponent, 
    MainContentComponent,
    AppComponent,
   // NewCommandDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
