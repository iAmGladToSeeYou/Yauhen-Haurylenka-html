import { Component } from '@angular/core';

class Item{
    country: string;
    cost: number;
    count: number;

    constructor(country: string, cost: number, count: number) {
        this.country = country;
        this.cost = cost;
        this.count = count;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: Item[] =
    [
        { country: "Egypt", cost: 300, count: 14 },
        { country: "Thailand", cost: 600,count: 10 },
        { country: "Bali", cost: 750,count: 11 },
        { country: "Turkey", cost:440,count: 12 },
        { country: "Dominicana", cost: 850,count: 8},
        { country: "Cuba", cost: 1000,count: 21}
    ];
    addItem(country: string, cost: number, count:number): void {
        if(country===null || cost===null)
            return;
        this.items.push(new Item(country, cost,count));
    }
    deleteItems(search:string):void {
      let index:number;
      for(let i:number = 0; i < this.items.length; i++) {
        index = this.items[i].country.indexOf(search);
        if(index >= 0) {
          this.items.splice(i,1);
        }
      }
    }
    sortCountryUp():void {
      this.items.sort((a:Item,b:Item) => (!!(a.country > b.country) as any) - 0.5);
    }
    sortCountryDown():void {
      this.items.sort((a:Item,b:Item) => (!!(a.country < b.country) as any) - 0.5);
    }
    sortCostUp():void {
      this.items.sort((a:Item,b:Item) => a.cost - b.cost);
    }
    sortCostDown():void {
      this.items.sort((a:Item,b:Item) => b.cost - a.cost);
    }

}
