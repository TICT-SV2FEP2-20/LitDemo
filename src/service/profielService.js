import { Profiel } from "../model/profiel";

export class ProfielService {

    constructor() {
        this.localDB = window.sessionStorage;
    }

    saveProfile(myProfile) {
        return new Promise((resolve, reject) => {    
            this.localDB.setItem('name', myProfile.name);
            this.localDB.setItem('adres', myProfile.adres);
            console.log(`ProfielService: ${myProfile.name}`);
            resolve("OK");
        });
    }

    getProfile() {
        return new Promise((resolve, reject) => {
            const myProfile = new Profiel();
            myProfile.name = this.localDB.getItem('name');
            myProfile.adres = this.localDB.getItem('adres');
            resolve(myProfile);
        })
    }
}