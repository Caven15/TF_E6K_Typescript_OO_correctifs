"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personne_1 = require("./models/personne");
const banque_1 = require("./models/banque");
const courant_1 = require("./models/courant");
const epargne_1 = require("./models/epargne");
const personne = new personne_1.Personne("Doe", "John", new Date("1986-05-16"));
console.log("Test Affichage personne : ");
console.log(`Nom : ${personne.Nom}`);
console.log(`Prenom : ${personne.Prenom}`);
console.log(`Date de Naissanse : ${personne.DateNaiss}`);
const courant = new courant_1.Courant("0000-0000-0001", 500, personne, 500);
const courant2 = new courant_1.Courant("0000-0000-0002", -500, personne, 500);
const epargne = new epargne_1.Epargne("0000-0000-0003", 500, personne);
const eparngeClient = epargne;
// eparngeClient.Numero = "0000-0000-0003"      => ne passera pas en raison de la lecture seul
// eparngeClient.Solde = 500                    => ne passera pas en raison de la lecture seul
// eparngeClient.Titulaire = personne           => ne passera pas en raison de la lecture seul
// eparngeClient.AppliquerInteret()             => ne passera pas (non présent dans l'interface)
eparngeClient.Depot(500); // Passera car la méthode est présentes dans mon interface
eparngeClient.Retrait(300); // Passera car la méthode est présentes dans mon interface
console.log(`Le solde du compte courant (interface ICustomer) après opération : ${eparngeClient.Solde}`);
const eparngeBanquier = epargne;
// eparngeBanquier.Numero = "0000-0000-0003"    => ne passera pas en raison de la lecture seul
// eparngeBanquier.Solde = 500                  => ne passera pas en raison de la lecture seul
// eparngeBanquier.Titulaire = personne         => ne passera pas en raison de la lecture seul
eparngeBanquier.AppliquerInteret(); // Passera car la méthode est présentes dans mon interface
eparngeBanquier.Depot(500); // Passera car la méthode est présentes dans mon interface
eparngeBanquier.Retrait(300); // Passera car la méthode est présentes dans mon interface
console.log(`Le solde du compte EPARGNE (interface IBanker) après opération : ${eparngeBanquier.Solde}`);
const banque = new banque_1.Banque("La banque centrale");
banque.Ajouter(courant);
banque.Ajouter(courant2);
banque.Ajouter(epargne);
