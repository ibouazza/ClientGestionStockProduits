import {Component, OnInit} from '@angular/core';

import{ProduitMockService} from'./produit.mock.service';
import { Produit } from '../Shared/produit';
//on utiliser  pour déclare notre composant
@Component({

    selector : 'app-produit',// on indique les selector
    templateUrl:'./produit.component.html',//puis on indique les fichies html
    styleUrls:['./produit.component.css']//et par la suite on indique les fichies css
})
 //  on doit export notre classe produitComponent pour quand puisse l'utilse dans les autres classe 
 export class ProduitComponent implements OnInit{ // on initialise (on doit entre dans la methode ngOnInit)
   
    produits : Produit[];
   constructor(private produitService : ProduitMockService ){ }
   // dans cette méthode on peut faire notre initialisation
   ngOnInit(){//celle qui s'ouvre dans le navigateur en promier
       this.produits = this.produitService.getProduits();
   }
}