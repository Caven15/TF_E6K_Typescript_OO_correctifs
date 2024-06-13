"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
const compte_1 = require("./compte");
const invalidOperationError_1 = require("../errors/invalidOperationError");
const soldeInsuffisantError_1 = require("../errors/soldeInsuffisantError");
class Courant extends compte_1.Compte {
    constructor(numero, solde, titulaire, ligneDeCredit = 0) {
        super(numero, solde, titulaire);
        this.ligneDeCredit = ligneDeCredit;
    }
    get LigneDeCredit() { return this.ligneDeCredit; }
    set LigneDeCredit(ligneDeCredit) {
        if (ligneDeCredit < 0)
            throw new invalidOperationError_1.InvalidOperationError();
        this.ligneDeCredit = ligneDeCredit;
    }
    Retrait(montant) {
        if (this.Solde - montant >= this.LigneDeCredit) {
            super.Retrait(montant);
        }
        else {
            throw new soldeInsuffisantError_1.SoldeInsuffisantError();
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
