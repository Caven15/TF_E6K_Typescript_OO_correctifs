export interface ICustomer{
    readonly Solde : number
    Retrait(montant : number) : void
    Depot(montant : number) : void
}