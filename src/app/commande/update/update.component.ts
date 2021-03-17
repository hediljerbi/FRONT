
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import{CommandeService} from 'src/app/commande/commande.service';
import { Commande } from 'src/app/commande/commande';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})


export class UpdateComponent implements OnInit {
  updateCommandeForm: FormGroup;

  idCommande : any;
 
  constructor(
    private fb: FormBuilder, 
    private commandeSerivce:CommandeService,
    private router:Router,
    private http : HttpClient,
    private route:ActivatedRoute)
     {
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
      this.updateCommandeForm = this.fb.group(formControls)
    }
      
       
    
  ngOnInit(): void 
  {
    this.idCommande = this.route.snapshot.params.id;   
   this.commandeSerivce.getOneCommande(this.idCommande).subscribe(
     res=>{
       let commande=res;
       this.updateCommandeForm.patchValue({
        commande_client : commande.commande_client,
        commande_date : commande.commande_date ,
        commande_information: commande.commande_information
      })
     }
   )

  }

  updateCommande() {
    let data = this.updateCommandeForm.value;
    
     this.commandeSerivce.updateCommande(this.idCommande, data).subscribe(
       res=>{
         console.log('Commande Modifiée avec Succès');
       },
       err=>{
         console.log('Error while updating your Commande', err);
       }
     )
  }
  
}