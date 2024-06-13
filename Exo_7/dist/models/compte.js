"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;
const argumentOutOfRangeError_1 = require("../errors/argumentOutOfRangeError");
class Compte {
    constructor(numero, solde, titulaire) {
        this.test = "test";
        this.numero = numero;
        this.solde = solde;
        this.titulaire = titulaire;
    }
    get Numero() { return this.numero; }
    set Numero(numero) { this.numero = numero; }
    get Solde() { return this.solde; }
    set Solde(solde) { this.solde = solde; }
    get Titulaire() { return this.titulaire; }
    set Titulaire(titulaire) { this.titulaire = titulaire; }
    Retrait(montant) {
        if (montant > 0)
            this.Solde -= montant;
        else
            throw new argumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }
    Depot(montant) {
        if (montant > 0)
            this.Solde += montant;
        else
            throw new argumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }
    AppliquerInteret() {
        this.Solde += this.CalculInteret();
    }
}
exports.Compte = Compte;
