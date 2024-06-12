"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personne_1 = require("./models/Personne");
const banque_1 = require("./models/banque");
const courant_1 = require("./models/courant");
const epargne_1 = require("./models/epargne");
const personne = new Personne_1.Personne();
personne.Nom = "Doe";
personne.Prenom = "John";
personne.DateNaiss = new Date("1986-05-16");
console.log("Test Affichage personne : ");
console.log(`Nom : ${personne.Nom}`);
console.log(`Prenom : ${personne.Prenom}`);
console.log(`Date de Naissanse : ${personne.DateNaiss}`);
const courant = new courant_1.Courant();
courant.Numero = "0000-0000-0001";
courant.Solde = 500;
courant.LigneDeCredit = 500;
courant.Titulaire = personne;
const courant2 = new courant_1.Courant();
courant2.Numero = "0000-0000-0002";
courant2.Solde = -500;
courant2.LigneDeCredit = 500;
courant2.Titulaire = personne;
const epargne = new epargne_1.Epargne();
epargne.Numero = "0000-0000-0003";
epargne.Solde = 500;
epargne.Titulaire = personne;
const banque = new banque_1.Banque();
banque.Nom = "La banque centrale";
banque.Ajouter(courant);
banque.Ajouter(courant2);
banque.Ajouter(epargne);
console.log("Application d'intérêts :");
courant.AppliquerInteret();
courant2.AppliquerInteret();
epargne.AppliquerInteret();
// Applique le polymorsphisme
// banque.AppliquerInteretSurToutComptes()
console.log(`Pour un compte disposant d'un solde de 500 voici le résultat après application intérêt : ${courant.Solde} €`);
console.log(`Pour un compte disposant d'un solde de -500 voici le résultat après application intérêt : ${courant2.Solde} €`);
console.log(`Pour un compte disposant d'un solde de 500 voici le résultat après application intérêt : ${epargne.Solde} €`);