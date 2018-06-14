import { Component } from "@angular/core";


@Component({
    selector: "app-menu",
    styleUrls: ["./menu.component.css"],
    templateUrl: "./menu.component.html"

})
export default class MenuComponent {
    liens = [];
    constructor() {
        this.liens[0] = 'azertt';
        this.liens[1] = 'Tchat';
    }
}
