"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epargne = void 0;
const compte_1 = require("./compte");
const soldeInsuffisantError_1 = require("../errors/soldeInsuffisantError");
class Epargne extends compte_1.Compte {
    constructor(numero, solde, titulaire) {
        super(numero, solde, titulaire);
    }
    get DateDernierRetrait() { return this.dateDernierRetrait; }
    Retrait(montant) {
        if (this.Solde - montant >= 0) {
            super.Retrait(montant);
            this.dateDernierRetrait = new Date();
        }
        else {
            throw new soldeInsuffisantError_1.SoldeInsuffisantError();
        }
    }
    CalculInteret() {
        return this.Solde * Epargne.TAUX;
    }
}
exports.Epargne = Epargne;
Epargne.TAUX = 0.045;
