export class Personne{
    private nom! : string
    private prenom! : string
    private dateNaiss! : Date

    get Nom(): string { return this.nom }
    set Nom(nom : string){ this.nom = nom }

    get Prenom(): string { return this.prenom }
    set Prenom(prenom : string){ this.prenom = prenom }

    get DateNaiss(): Date { return this.dateNaiss }
    set DateNaiss(dateNaiss : Date){ this.dateNaiss = dateNaiss }
}