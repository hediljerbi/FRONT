import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private commandeUrl="http://localhost:8000/api/commande";
  constructor(private http:HttpClient){}
  addCommande(commande:Commande){
    return this.http.post<any>(this.commandeUrl,commande);
  }

  deleteCommande(id:number){
    return this.http.delete<any>(this.commandeUrl+'/'+id)
    
  }
  
  getOneCommande(id: number) {
    return this.http.get<any>(this.commandeUrl +'/'+ id)
  }

 updateCommande(id : any, data : any){
   return this.http.put<any>(this.commandeUrl+'/'+id, data);
 }

}



















export class Commande {

  constructor(
        id?:number,
        commande_client? : number ,
        commande_date ?: Date ,
        commande_information ?: String ,
      
  ){

  }
}