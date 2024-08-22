export class Invoice {
    constructor(person, details, amount) {
        this.person = person;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.person} didn't pay ${this.amount} because of ${this.details}`;
    }
}
