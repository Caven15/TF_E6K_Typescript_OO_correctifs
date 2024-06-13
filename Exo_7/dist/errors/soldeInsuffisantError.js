"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoldeInsuffisantError = void 0;
class SoldeInsuffisantError extends Error {
    constructor(message = "pour affectuer un retrait, le solde doit être supérieur a 0") {
        super(message);
        this.name = "soldeInsuffisantError";
    }
}
exports.SoldeInsuffisantError = SoldeInsuffisantError;
