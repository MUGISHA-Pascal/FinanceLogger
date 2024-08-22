import { hasFormatter } from "./hasFormatter";

export class Receipt implements hasFormatter 
{
	constructor(
		public person: string,
		public details: string,
		public amount : number
	) {}
	
	format()
	{
		return `${this.person} has a receipt of a total of ${this.amount} because of ${this.details}`
	}
}