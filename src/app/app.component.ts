import { Component } from '@angular/core';
import { Data } from './card-details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  styles: string = ''
  cardData: Data;

  constructor() {
    this.cardData = new Data()
    let color = this.cardData.getStyle('Card1')
    this.styles = color != '' ? `background-color:${color};`: '';
    console.log(color)
  }
}
