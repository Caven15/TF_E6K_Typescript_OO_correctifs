export class InvalidOperationError extends Error {
    constructor(message : string = "La ligne de crédit ne peux être négative..."){
        super(message)
        this.name = "InvalidOperationError"
    } 
}