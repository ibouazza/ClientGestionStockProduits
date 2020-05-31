export class Produit{
// on a ajouter ? pour que ces parameter soi optionnelle (on peut les utiliser ou pas)
    constructor( public ref?:string,
                public quantite?:number,
                public prixunitaire?: number){

    }
} 