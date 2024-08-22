"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(person, details, amount) { }
    format() {
        return `${person} didn't pay ${amount} because of ${details}`;
    }
}
exports.Invoice = Invoice;
