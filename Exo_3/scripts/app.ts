import { Personne } from "./models/Personne"
import { Banque } from "./models/banque"
import { Compte } from "./models/compte"
import { Courant } from "./models/courant"
import { Epargne } from "./models/epargne"

const personne = new Personne()

personne.Nom = "Doe"
personne.Prenom = "John"
personne.DateNaiss = new Date("1986-05-16")

console.log("Test Affichage personne : ");
console.log(`Nom : ${personne.Nom}`);
console.log(`Prenom : ${personne.Prenom}`);
console.log(`Date de Naissanse : ${personne.DateNaiss}`);

const courant = new Courant()

courant.Numero = "0000-0000-0001"
courant.Solde = 500
courant.LigneDeCredit = 500
courant.Titulaire = personne

// courant.Retrait(1200) // ne passera pas...
courant.Retrait(800) // passera 

const epargne = new Epargne()

epargne.Numero = "0000-0000-0002"
epargne.Solde = 3000
epargne.Titulaire = personne

epargne.Retrait(500)

console.log(`La date de dernier retrait du compte épargne est : ${epargne.DateDernierRetrait}`);

const banque = new Banque()
banque.Nom = "La banque centrale"
banque.Ajouter(courant)
banque.Ajouter(epargne)

const CompteRecupere : Compte | undefined = banque.ObtenirCompte("0000-0000-0002")

console.log(`Le compte numéro "0000-0000-0002" apartient à ${CompteRecupere?.Titulaire.Prenom}`);

let result : number = banque.AvoirDesComptes(personne)


console.log(`Somme des avoirs des compte de ${personne.Nom} ${personne.Prenom} sont de : ${banque.AvoirDesComptes(personne)}`);

banque.Supprimer("0000-0000-0001")

console.log(`Somme des avoirs des compte de ${personne.Nom} ${personne.Prenom} sont de : ${banque.AvoirDesComptes(personne)}`);