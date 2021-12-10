import { Profiel } from "../model/profiel";

export class ProfielService {

    constructor() {
        this.localDB = window.sessionStorage;
    }

    saveProfile(myProfile) {
        return new Promise((resolve, reject) => {    
            // this.localDB.setItem('name', myProfile.name);
            // this.localDB.setItem('adres', myProfile.adres);
            // this.localDB.setItem('email', myProfile.email);
            this.localDB.setItem('profile', JSON.stringify(myProfile));
            resolve("OK");
        });
    }

    getProfile() {
        return new Promise((resolve, reject) => {
            let data = JSON.parse(this.localDB.getItem('profile'));
            let myProfile = Object.assign(new Profiel(), data);

            // myProfile.name = this.localDB.getItem('name');
            // myProfile.adres = this.localDB.getItem('adres');
            // myProfile.email = this.localDB.getItem('email');
            resolve(myProfile);
        })
    }
}