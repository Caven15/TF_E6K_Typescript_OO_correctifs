"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
const compte_1 = require("./compte");
class Courant extends compte_1.Compte {
    constructor(numero, solde, titulaire, ligneDeCredit = 0) {
        super(numero, solde, titulaire);
        this.ligneDeCredit = ligneDeCredit;
    }
    get LigneDeCredit() { return this.ligneDeCredit; }
    set LigneDeCredit(ligneDeCredit) { this.ligneDeCredit = ligneDeCredit; }
    Retrait(montant) {
        if (this.Solde - montant >= this.LigneDeCredit) {
            super.Retrait(montant);
        }
    }
    CalculInteret() {
        let interet;
        if (this.Solde >= 0) {
            interet = this.Solde * Courant.TAUX_POSITIF;
        }
        else {
            interet = this.Solde * Courant.TAUX_NEGATIF;
        }
        return interet;
    }
}
exports.Courant = Courant;
Courant.TAUX_POSITIF = 0.03;
Courant.TAUX_NEGATIF = 0.0975;
