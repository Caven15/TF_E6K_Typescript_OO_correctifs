export class ArgumentOutOfRangeError extends Error {
    constructor(message : string = "Le montant du dépôt / retrait est inférieur ou égal a 0"){
        super(message)
        this.name = "ArgumentOutOfRangeError"
    } 
}