import { Personne } from "./models/Personne"
import { Courant } from "./models/courant"

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
courant.Solde = 5000
courant.LigneDeCredit = 500
courant.Titulaire = personne

console.log("Test affichage courant");
console.log(`Numéro : ${courant.Numero}`);
console.log(`Solde : ${courant.Solde}`);
console.log(`Ligne de crédit : ${courant.LigneDeCredit}`);
console.log(`Titulaire : ${courant.Titulaire.Nom} ${courant.Titulaire.Prenom}`);

// Test méthodes retrait & dépôt
courant.Depot(200)
console.log(`Solde après dépôt de 200: ${courant.Solde}`);

courant.Retrait(300)
console.log(`Solde après retrait de 300: ${courant.Solde}`);