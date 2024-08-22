const form = document.querySelector("form");
const type = document.querySelector("#type");
const person = document.querySelector("#person");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
import { Invoice } from "./invoice.js";
import { Payment } from "./payment.js";
import { ListTemplate } from "./listTemplate.js";
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (type.value === "invoice") {
        const doc = new Invoice(person.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value, "start");
    }
    else {
        const doc = new Payment(person.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value, "end");
    }
});
