import { Component } from "@angular/core";


@Component({
    selector: "app-login",
    styleUrls: ["./login.component.scss"],
    templateUrl: "./login.component.html"

})
export default class LoginComponent {
    // attributs
    pseudonyme: string;
    mel: string;

    /*
    * constructeur : fonction pour initialiser un objet quand on le crée
    * appelée une fois lorsqu'on instancie un objet
    * instancier : créer un objet
    * let domi = new eleve();
    */

    constructor() {
    }

    // methode : fonction déclarée dans une classe
    connecter() {
        console.log("Connexion :", this.pseudonyme, " == ", this.mel);
    }
    truc() {
        console.log("J'ai cliqué sur mon titre");
    }
}
