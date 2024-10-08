import { hasFormatter } from "./hasFormatter";
export class Invoice implements hasFormatter {
  constructor(
    public person: string,
    public details: string,
    public amount: number
  ) {}
  format() {
    return `${this.person} didn't pay ${this.amount} because of ${this.details}`;
  }
}
