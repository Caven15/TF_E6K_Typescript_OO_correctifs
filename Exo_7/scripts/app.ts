import { Personne } from "./models/personne"
import { Courant } from "./models/courant"
import { Epargne } from "./models/epargne"

const personne = new Personne(
    "Doe",
    "John",
    new Date("1986-05-16")
)

const courant = new Courant(
    "0000-0000-0001",
    500,
    personne,
    500
)

const epargne : Epargne = new Epargne(
    "0000-0000-0003",
    500,
    personne
)

courant.Retrait(-500)           // leve une erreur OutOfRange
courant.Depot(-500)             // leve une erreur OutOfRange
courant.LigneDeCredit = -500    // Leve une erreur soldeInsufisant

