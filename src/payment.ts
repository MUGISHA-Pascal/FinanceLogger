import { hasFormatter } from "./hasFormatter";
export class Payment implements hasFormatter {
  constructor(
    public person: string,
    public details: string,
    public amount: number
  ) {}
  format() {
    return `${this.person} paid ${this.amount} because of ${this.details}`;
  }
}
