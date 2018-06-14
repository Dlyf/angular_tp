import { Routes } from "@angular/router";
import TchatComponent from "../components/tchat/tchat.component";
import ArticleComponent from "../components/article/article.component";

export const ROUTES: Routes = [
    {
        path: "tchat",
        component: TchatComponent
    },
    {
        path: "",
        component: ArticleComponent
    }
];
