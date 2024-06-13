import { Personne } from "./personne";
import { Compte } from "./compte";

export class Courant extends Compte{
    private static TAUX_POSITIF : number = 0.03
    private static TAUX_NEGATIF : number = 0.0975
    
    private ligneDeCredit : number
    

    constructor(numero : string, solde : number, titulaire : Personne, ligneDeCredit : number = 0){
        super(numero, solde, titulaire)
        this.ligneDeCredit = ligneDeCredit
    }
    
    get LigneDeCredit(): number { return this.ligneDeCredit }
    set LigneDeCredit(ligneDeCredit : number){ this.ligneDeCredit = ligneDeCredit }
    
    Retrait(montant : number) : void{
        if(this.Solde - montant >= this.LigneDeCredit){
            super.Retrait(montant)
        }
        
    }

    protected CalculInteret(): number {
        let interet : number 
        if(this.Solde >= 0){
            interet = this.Solde * Courant.TAUX_POSITIF
        } else{
            interet = this.Solde * Courant.TAUX_NEGATIF
        }
        return interet
    }
}