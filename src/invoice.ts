export class Invoice {
  constructor(person: string, details: string, amount: number) {}
  format() {
    return `${person} didn't pay ${amount} because of ${details}`;
  }
}
