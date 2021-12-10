import { LitElement, html, css } from "lit";
import { ProfielService } from "../../service/profielService";
import { Profiel } from "../../model/profiel";

export class MyDashboard extends LitElement {
    static styles = css``;
    static properties = {};

    constructor() {
        super();
        this.profileService = new ProfielService();
        this.profileService.getProfile()
            .then((result) => {
                this.profile = result;
            });
    }

    render() {
        console.log('render');
        return html`
            <h1>My Dashboard</h1>
            <div>
                <p><span class="label">Naam:</span><span>${this.profile.name}</span></p>
                <p><span class="label">Adres:</span><span>${this.profile.adres}</span></p>
                <p><span class="label">email:</span><span>${this.profile.email}</span></p>
            </div>
        `;
    }
}

customElements.define('my-dashboard', MyDashboard);
