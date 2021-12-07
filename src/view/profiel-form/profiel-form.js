import { LitElement, html, css } from "lit";
import { ProfielService } from "../../service/profielService";
import { Profiel } from "../../model/profiel";

export class ProfielForm extends LitElement {
    static styles = css`
        :host {}
    `;
    static properties = {
        name: {
            type: String
        },
        tel: {
            type: Number 
        },
        adres: {
            type: String
        },
        url: {
            type: String
        },
        email: {
            type: String
        }
    }

    constructor() {
        super();
        this.profielService = new ProfielService();
    }

    formsubmitted(event) {
        console.log(this.name);
        console.log(this.adres);
        console.log(this.email);
        console.log(this.tel);
        console.log(this.url);

        const myProfile = new Profiel();
        myProfile.name = this.name;
        myProfile.adres = this.adres;

        this.profielService.saveProfile(myProfile);
    }

    render() {
        return html`
            <h1>My Profile</h1>
            <form action="" id="profiel-form">
                <mwc-textfield label="Naam" type="text" @change=${(event) => this.name=event.target.value} value="${this.name}" required></mwc-textfield>
                <mwc-textfield label="Adres" type="text" @change=${(event) => this.adres=event.target.value}></mwc-textfield>
                <mwc-textfield label="Email" type="email" @change=${(event) => this.email=event.target.value}></mwc-textfield>
                <mwc-textfield label="Tel" type="tel" @change=${(event) => this.tel=event.target.value}></mwc-textfield>
                <mwc-textfield label="Image" type="url" helper="geef een url naar je profiel plaatje" @change=${(event) => this.url=event.target.value}></mwc-textfield>
                <mwc-button @click=${this.formsubmitted} raised label="Submit" type="submit"></mwc-button>
            </form>
        `;
    }
}

customElements.define('profiel-form', ProfielForm);
