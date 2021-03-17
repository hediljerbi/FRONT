import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { CommandeService } from '../commande.service';
import { NewCommandDialogComponent } from '../new-command-dialog/new-command-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {Observable} from 'rxjs';

export interface Commande{
  id:string,
  commande_client?:string,
  commande_date?:string
}

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})

export class CommandeComponent implements OnInit  {
  
  displayedColumns = ['id', 'commandeclient', 'commandedate','commandeinformation','action'];
  commandesData =<any>[];
  dataSource:any;
  constructor(private http: HttpClient,private commandeService:CommandeService){
  this.http.get('http://localhost:8000/api/commande').subscribe(data => {
  this.commandesData.push(data);
  this.dataSource = new MatTableDataSource(this.commandesData[0]);
    }, error => console.error(error));
  
  }
  ngOnInit(): void{}

   delete(commande : any){
     
    // let index=this.commandesData.indexOf(commande);
    // this.commandesData.splice(index,1); 
    this.commandeService.deleteCommande(commande['id']).subscribe(
      (res)=>{
        console.log('Commande supprimée avec succès');
        this.removeFromMatTable(commande['id'])
        
  }, err=>{console.log('erreur lors de la suppression de la commande', err);}
    )
  }

  removeFromMatTable(idToBeRemoved : any){
    const  dataSourceTmp = this.dataSource.data;
    this.dataSource.data.forEach((element : any, index : Number) => {
      if (element.id == idToBeRemoved){
        dataSourceTmp.splice(index, 1)
      }
    });
    this.dataSource = new MatTableDataSource(dataSourceTmp);
  }

}//matdialog
  /*openAddCommandDialog(): void {
    let dialogRef=this.dialog.open (NewCommandDialogComponent , {
     width:'450px'
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log("the dialog was closed",result);
   });
  } }
 
  */