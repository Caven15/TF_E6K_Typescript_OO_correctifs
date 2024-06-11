import { Personne } from "./Personne";

export class Courant {
    private numero! : string
    private solde! : number
    private ligneDeCredit! : number
    private titulaire! : Personne

    get Numero(): string { return this.numero }
    set Numero(numero : string){ this.numero = numero }

    get Solde(): number { return this.solde }
    set Solde(solde : number){ this.solde = solde }

    get LigneDeCredit(): number { return this.ligneDeCredit }
    set LigneDeCredit(ligneDeCredit : number){ this.ligneDeCredit = ligneDeCredit }
    
    get Titulaire(): Personne { return this.titulaire }
    set Titulaire(titulaire : Personne){ this.titulaire = titulaire }

    Retrait(montant : number) : void{
        if(montant > 0) this.Solde -= montant
    }

    Depot(montant : number) : void{
        if(montant > 0) this.Solde += montant
    }
}