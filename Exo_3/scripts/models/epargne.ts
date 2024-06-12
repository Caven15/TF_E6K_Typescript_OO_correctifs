import { Compte } from "./compte";

export class Epargne extends Compte{
    private dateDernierRetrait! : Date

    get DateDernierRetrait() : Date{return this.dateDernierRetrait}

    Retrait(montant: number): void {
        if(this.Solde - montant >= 0){
            super.Retrait(montant)
            this.dateDernierRetrait = new Date()
        }
    }
}