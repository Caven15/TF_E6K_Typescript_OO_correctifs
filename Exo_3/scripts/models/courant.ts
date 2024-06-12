import { Personne } from "./Personne";
import { Compte } from "./compte";

export class Courant extends Compte{
    private ligneDeCredit! : number

    get LigneDeCredit(): number { return this.ligneDeCredit }
    set LigneDeCredit(ligneDeCredit : number){ this.ligneDeCredit = ligneDeCredit }

    Retrait(montant : number) : void{
        if(this.Solde - montant >= this.LigneDeCredit){
            super.Retrait(montant)
        }
    }
}