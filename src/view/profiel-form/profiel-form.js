import { LitElement, html, css } from "lit";
import { ProfielService } from "../../service/profielService";
import { Profiel } from "../../model/profiel";

export class ProfielForm extends LitElement {
    static styles = css`
        :host {}

        h1 {
            grid-area: header;
        }
        button {
            grid-area: button;
        }
        #name {
            grid-area: name;
        }
        #adres {
            grid-area: adres;
        }
        #tel {
            grid-area: tel;
        }
        #email {
            grid-area: email;
        }
        #image{
            grid-area: image;
        }
        #birthday {
            grid-area: birthday;
        }
        #none {
            grid-area: none;
        }

        form {
            display: grid;
            grid-gap: 20px;
        }

        @media screen and (min-width: 900px) {
            none: {
                display: block;
            }

            form {
                grid-template-columns: 1fr auto;
                grid-template-areas:
                    "name adres"
                    "email adres"
                    "tel birthday"
                    "image image"
                    "none button";
            }
        }

        @media screen and (max-width: 900px) {
            form {
                grid-template-areas:
                    "name"
                    "adres"
                    "email"
                    "tel"
                    "birthday"
                    "image"
                    "button";
            }

            #none {
                display: none;
            }
        }

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
        birthday: {
            type: Date
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
                <mwc-textfield id="name" label="Naam" type="text" @change=${(event) => this.name=event.target.value} value="${this.name}" required></mwc-textfield>
                <mwc-textarea id="adres" label="Adres" type="text" @change=${(event) => this.adres=event.target.value}></mwc-textarea>
                <mwc-textfield id="email" label="Email" type="email" @change=${(event) => this.email=event.target.value}></mwc-textfield>
                <mwc-textfield id="tel" label="Tel" type="tel" @change=${(event) => this.tel=event.target.value}></mwc-textfield>
                <mwc-textfield id="image" label="Image" type="url" helper="geef een url naar je profiel plaatje" @change=${(event) => this.url=event.target.value}></mwc-textfield>
                <mwc-textfield id="birthday" label="Gebortedatum" type="date" @change=${(event) => this.birthday=event.target.value}></mwc-textfield>
                <mwc-button @click=${this.formsubmitted} raised label="Submit" type="submit"></mwc-button>
                <p id="none"></p>
            </form>
            
        `;
    }
}

customElements.define('profiel-form', ProfielForm);
