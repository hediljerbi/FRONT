import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CommandeComponent } from 'src/app/commande/commande/commande.component';
import{CommandeService} from 'src/app/commande/commande.service';
import { Commande } from 'src/app/commande/commande';
import {Router} from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-command-dialog',
  templateUrl: './new-command-dialog.component.html',
  styleUrls: ['./new-command-dialog.component.scss']
})


export class NewCommandDialogComponent implements OnInit {
  addCommandeForm: FormGroup;
 
  constructor(
    private fb: FormBuilder, 
    private commandeSerivce:CommandeService,
    private router:Router,
    ) {
      let formControls = {
        commande_client: new FormControl('',[
          Validators.required
          
        ]),
       commande_date: new FormControl('',[
          Validators.required,
          Validators.minLength(5)
        ]),
        commande_information: new FormControl('',[
          Validators.required,
          Validators.minLength(2)
        ]),
      }

  
      this.addCommandeForm = this.fb.group(formControls)
    }
      get client() { return this.addCommandeForm.get('commande_client') }
      get date() { return this.addCommandeForm.get('commande_date') }
      get information() { return this.addCommandeForm.get('commande_information') }
       
    
  ngOnInit(): void {}

  addCommande() {
    let data = this.addCommandeForm.value;

    // let commande = new Commande(data.commande_client,data.commande_date,data.commande_information);

    this.commandeSerivce.addCommande(data).subscribe(
      res=>{
        console.log('Commande Enregistrée avec Succès');
        
      },
      err=>{
        console.log('Error while saving your Commande');
      }
    )

  }
  
}