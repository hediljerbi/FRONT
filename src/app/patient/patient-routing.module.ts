import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  { path: '', component: PatientComponent },
  { path: 'patients-list', component: PatientComponent },
  { path: 'patient-details', component: PatientDetailsComponent },
  { path: '**', redirectTo: 'list-patients' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
