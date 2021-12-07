export class Profiel {
    _name;
    _adres;   

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get adres() {
        return this._adres;
    }

    set adres(value) {
        this._adres = value;
    }

    constructor() {
    }
}