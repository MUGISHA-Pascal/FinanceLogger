export class Receipt {
    constructor(person, details, amount) {
        this.person = person;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.person} has a receipt of a total of ${this.amount} because of ${this.details}`;
    }
}
