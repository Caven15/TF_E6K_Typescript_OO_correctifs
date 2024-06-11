"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
class Courant {
    get Numero() { return this.numero; }
    set Numero(numero) { this.numero = numero; }
    get Solde() { return this.solde; }
    set Solde(solde) { this.solde = solde; }
    get LigneDeCredit() { return this.ligneDeCredit; }
    set LigneDeCredit(ligneDeCredit) { this.ligneDeCredit = ligneDeCredit; }
    get Titulaire() { return this.titulaire; }
    set Titulaire(titulaire) { this.titulaire = titulaire; }
    Retrait(montant) {
        if (montant > 0)
            this.Solde -= montant;
    }
    Depot(montant) {
        if (montant > 0)
            this.Solde += montant;
    }
}
exports.Courant = Courant;
