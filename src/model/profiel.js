export class Profiel {
    _name;
    _adres; 

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value.toUpperCase();
    }

    get adres() {
        return this._adres.toUpperCase();
    }

    set adres(value) {
        this._adres = value;
    }

    constructor() {
    }
}