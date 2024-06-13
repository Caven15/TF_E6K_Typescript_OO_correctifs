"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(nom, prenom, dateNaiss) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaiss = dateNaiss;
    }
    get Nom() { return this.nom; }
    set Nom(nom) { this.nom = nom; }
    get Prenom() { return this.prenom; }
    set Prenom(prenom) { this.prenom = prenom; }
    get DateNaiss() { return this.dateNaiss; }
    set DateNaiss(dateNaiss) { this.dateNaiss = dateNaiss; }
}
exports.Personne = Personne;
