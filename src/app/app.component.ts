import { Component } from '@angular/core';
import { Card, Data } from './card-details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  cardStyles: string = ''
  backGroundStyle: string = ''
  cardData: Data;

  constructor() {
    this.cardData = new Data()
    let card: Card | undefined = this.cardData.getCard('Card1')
    if(card) {
      this.cardStyles = `background-color:${card.color};`;
      this.backGroundStyle = `background-color:${card.colorB};`;

    } 
  }
}
