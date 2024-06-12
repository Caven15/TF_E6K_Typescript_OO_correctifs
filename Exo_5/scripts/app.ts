import { IBanker } from "./interfaces/i-banquer"
import { ICustomer } from "./interfaces/i-customer"
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

const courant2 = new Courant()

courant2.Numero = "0000-0000-0002"
courant2.Solde = -500
courant2.LigneDeCredit = 500
courant2.Titulaire = personne

const epargne : Epargne = new Epargne()

epargne.Numero = "0000-0000-0003"
epargne.Solde = 500
epargne.Titulaire = personne
epargne.Retrait(300)

const eparngeClient : ICustomer = epargne

// eparngeClient.Numero = "0000-0000-0003"      => ne passera pas en raison de la lecture seul
// eparngeClient.Solde = 500                    => ne passera pas en raison de la lecture seul
// eparngeClient.Titulaire = personne           => ne passera pas en raison de la lecture seul
// eparngeClient.AppliquerInteret()             => ne passera pas (non présent dans l'interface)
eparngeClient.Depot(500)                        // Passera car la méthode est présentes dans mon interface
eparngeClient.Retrait(300)                      // Passera car la méthode est présentes dans mon interface
console.log(`Le solde du compte courant (interface ICustomer) après opération : ${eparngeClient.Solde}`);

const eparngeBanquier : IBanker = epargne

// eparngeBanquier.Numero = "0000-0000-0003"    => ne passera pas en raison de la lecture seul
// eparngeBanquier.Solde = 500                  => ne passera pas en raison de la lecture seul
// eparngeBanquier.Titulaire = personne         => ne passera pas en raison de la lecture seul
eparngeBanquier.AppliquerInteret()              // Passera car la méthode est présentes dans mon interface
eparngeBanquier.Depot(500)                      // Passera car la méthode est présentes dans mon interface
eparngeBanquier.Retrait(300)                    // Passera car la méthode est présentes dans mon interface
console.log(`Le solde du compte EPARGNE (interface IBanker) après opération : ${eparngeBanquier.Solde}`);


const banque = new Banque()
banque.Nom = "La banque centrale"
banque.Ajouter(courant)
banque.Ajouter(courant2)
banque.Ajouter(epargne)