import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: 'toDate'
})
export default class FilterTimestamp implements PipeTransform {
   transform(timestamp: number) {
       let resultat = "une date à afficher";

       const date = new Date(timestamp * 1000);
       const heure = date.getHours();
       const min = date.getMinutes();
       const sec = date.getSeconds();
       // resultat = heure + ':' + min + '' + sec;
       resultat = `${heure}:${min}:${sec}`;

       return resultat;
   }
}
