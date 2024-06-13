"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personne_1 = require("./models/personne");
const courant_1 = require("./models/courant");
const epargne_1 = require("./models/epargne");
const personne = new personne_1.Personne("Doe", "John", new Date("1986-05-16"));
const courant = new courant_1.Courant("0000-0000-0001", 500, personne, 500);
const epargne = new epargne_1.Epargne("0000-0000-0003", 500, personne);
courant.LigneDeCredit = -500;
