import { Personne } from "./models/Personne"
import { Banque } from "./models/banque"
import { Courant } from "./models/courant"

const personne = new Personne()

personne.Nom = "Doe"
personne.Prenom = "John"
personne.DateNaiss = new Date("1986-05-16")

console.log("Test Affichage personne : ");
console.log(`Nom : ${personne.Nom}`);
console.log(`Prenom : ${personne.Prenom}`);
console.log(`Date de Naissanse : ${personne.DateNaiss}`);

const courant1 = new Courant()

courant1.Numero = "0000-0000-0001"
courant1.Solde = 5000
courant1.LigneDeCredit = 500
courant1.Titulaire = personne

const courant2 = new Courant()

courant2.Numero = "0000-0000-0002"
courant2.Solde = 3000
courant2.LigneDeCredit = 1000
courant2.Titulaire = personne


const banque = new Banque()
banque.Nom = "La banque centrale"
banque.Ajouter(courant1)
banque.Ajouter(courant2)

const CompteRecupere : Courant | undefined = banque.ObtenirCompte("0000-0000-0002")

console.log(`Le compte numéro "0000-0000-0002" apartient à ${CompteRecupere?.Titulaire.Prenom}`);

let result : number = banque.AvoirDesComptes(personne)


console.log(`Somme des avoirs des compte de ${personne.Nom} ${personne.Prenom} sont de : ${banque.AvoirDesComptes(personne)}`);

banque.Supprimer("0000-0000-0001")

console.log(`Somme des avoirs des compte de ${personne.Nom} ${personne.Prenom} sont de : ${banque.AvoirDesComptes(personne)}`);