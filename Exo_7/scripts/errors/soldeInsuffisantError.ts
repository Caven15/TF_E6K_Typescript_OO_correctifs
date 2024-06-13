export class SoldeInsuffisantError extends Error {
    constructor(message : string = "pour affectuer un retrait, le solde doit être supérieur a 0"){
        super(message)
        this.name = "soldeInsuffisantError"
    } 
}