import { Personne } from "./Personne"
import { Courant } from "./courant"


export class Banque {
    private nom! : string
    private comptes : Map<string,Courant> = new Map()

    get Nom(): string { return this.nom }
    set Nom(nom : string){ this.nom = nom }

    ObtenirCompte(numero : string): Courant | undefined {
        if(this.comptes.has(numero)){
            return this.comptes.get(numero)
        }
    }

    Ajouter(compte : Courant) : void {
        if(!this.comptes.has(compte.Numero)){
            this.comptes.set(compte.Numero, compte)
        }
    }

    Supprimer(numero : string): void{
        if(this.comptes.has(numero)){
            this.comptes.delete(numero)
        }
    }

    AvoirDesComptes(titulaire : Personne) : number{
        let avoir : number = 0
        this.comptes.forEach((value, key) => {
            if(value.Titulaire.Nom === titulaire.Nom){
                avoir += value.Solde
            }
        })
        return avoir
    }
}