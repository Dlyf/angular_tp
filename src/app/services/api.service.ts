import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export default class ApiService {
    db: AngularFirestore;
    bdd: Observable<any[]>;
    constructor(db: AngularFirestore) {
        this.db = db;
        // se connecte à la base de données firebase
        this.bdd = db.collection(
            'table', // collection qui se nomme "table"
            ref => ref.orderBy('id') // c'est bien fonction fléchée
        ).valueChanges();
        // bdd est synchronisé avec firebase
        // si firebase change, bdd aussi
        this.bdd.subscribe(
            (data) => { // action à effectuer à chaque changement
                console.log(data);
            }
        );

    }

    sauvegarderMessage(msg: string) {
        this.db.collection('table').add({
            texte: msg,
            id: Math.floor(Date.now() / 1000)

        });
    }
    // renvoie la connexion synchronisée vers la bdd
    recupererBdd() {
        return this.bdd;
    }
}
