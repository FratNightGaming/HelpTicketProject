import { Favorite } from "./favorite";

export class User {
    id:        number;
    userName:  string;
    favorites: Favorite[];

    constructor(){
        this.id = 0;
        this.userName = "";
        this.favorites = [];

    }
}


