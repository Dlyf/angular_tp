import { Component } from "@angular/core";
import ApiService from "../../services/api.service";


@Component({
    selector: "app-tchat",
    styleUrls: ["./tchat.component.scss"],
    templateUrl: "./tchat.component.html"

})
export default class TchatComponent {
    // attributs
    msg: string;
    api: ApiService;
    messagesUtilisateurs: any[]; // tableau de trucs



    constructor(api: ApiService) {
        this.api = api;
        const bdd = this.api.recupererBdd();

        bdd.subscribe(
            (data) => { // action à effectuer à chaque changement
                this.messagesUtilisateurs = data;
            }
        );
    }
    envoyerMessage() {
        this.api.sauvegarderMessage(this.msg);
    }
}

/* relier msg à l'input
relier le bouton submit = envoyerMessage() */
