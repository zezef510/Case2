export class Account {
    private _nameAccount : string;
    private _pass : string;
    private _numberPhone : string;
    private _address : string;
    private _email : string;
    private _age : number
    private _username : string

    constructor(nameAccount: string, pass: string, numberPhone: string, address: string, email: string, age: number, username: string) {
        this._nameAccount = nameAccount;
        this._pass = pass;
        this._numberPhone = numberPhone;
        this._address = address;
        this._email = email;
        this._age = age;
        this._username = username;
    }

    get nameAccount(): string {
        return this._nameAccount;
    }

    set nameAccount(value: string) {
        this._nameAccount = value;
    }

    get pass(): string {
        return this._pass;
    }

    set pass(value: string) {
        this._pass = value;
    }

    get numberPhone(): string {
        return this._numberPhone;
    }

    set numberPhone(value: string) {
        this._numberPhone = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }
}