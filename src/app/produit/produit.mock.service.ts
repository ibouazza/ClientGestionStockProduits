import{Injectable} from '@angular/core';//pour qu'on puisse injecter ces services dans d'atre composants
import { Produit } from "../Shared/produit";

@Injectable()
export class ProduitMockService{
   // une liste
    private PRODUITS: Produit[]= [];

     constructor(){
     //la liste de produit
        let p1 :Produit = new Produit('livre',50,20);
        let p2 :Produit = new Produit('cahier',200,5.25);
        let p3 :Produit = new Produit('stylo',2,10);
        this.PRODUITS.push(p1); //push pour ajouter ces élement a la liste des produits
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);

   }
    // créer une méthode public pour récuper vos produits
   public getProduits(): Produit[]{

    return this.PRODUITS;
   }
}