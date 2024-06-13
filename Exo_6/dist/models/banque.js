"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banque = void 0;
class Banque {
    constructor(nom) {
        this.nom = nom;
        this.comptes = new Map;
    }
    get Nom() { return this.nom; }
    set Nom(nom) { this.nom = nom; }
    ObtenirCompte(numero) {
        if (this.comptes.has(numero)) {
            return this.comptes.get(numero);
        }
    }
    Ajouter(compte) {
        if (!this.comptes.has(compte.Numero)) {
            this.comptes.set(compte.Numero, compte);
        }
    }
    Supprimer(numero) {
        if (this.comptes.has(numero)) {
            this.comptes.delete(numero);
        }
    }
    AvoirDesComptes(titulaire) {
        let avoir = 0;
        this.comptes.forEach((value, key) => {
            if (value.Titulaire.Nom === titulaire.Nom) {
                avoir += value.Solde;
            }
        });
        return avoir;
    }
    AppliquerInteretSurToutComptes() {
        this.comptes.forEach((value, key) => {
            value.AppliquerInteret();
        });
    }
}
exports.Banque = Banque;
