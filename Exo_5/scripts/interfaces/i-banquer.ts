import { Personne } from "../models/Personne";
import { ICustomer } from "./i-customer";

export interface IBanker extends ICustomer{
    AppliquerInteret(): void
    readonly Titulaire : Personne
    readonly Numero : string
}