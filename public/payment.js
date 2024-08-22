export class Payment {
    constructor(person, details, amount) {
        this.person = person;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.person} paid ${this.amount} because of ${this.details}`;
    }
}
