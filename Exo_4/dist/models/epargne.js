"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epargne = void 0;
const compte_1 = require("./compte");
class Epargne extends compte_1.Compte {
    get DateDernierRetrait() { return this.dateDernierRetrait; }
    Retrait(montant) {
        if (this.Solde - montant >= 0) {
            super.Retrait(montant);
            this.dateDernierRetrait = new Date();
        }
    }
    CalculInteret() {
        return this.Solde * Epargne.TAUX;
    }
}
exports.Epargne = Epargne;
Epargne.TAUX = 0.045;
