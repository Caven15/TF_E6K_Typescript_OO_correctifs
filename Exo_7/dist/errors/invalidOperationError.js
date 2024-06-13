"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidOperationError = void 0;
class InvalidOperationError extends Error {
    constructor(message = "La ligne de crédit ne peux être négative...") {
        super(message);
        this.name = "InvalidOperationError";
    }
}
exports.InvalidOperationError = InvalidOperationError;
