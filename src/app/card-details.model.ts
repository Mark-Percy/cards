export class Data {
    cards: Card[] = [{name: 'Card1', colorB: '#9f9fff'}]

    getStyle(cardName: string): string {
        let color = this.cards.find(e => e.name == cardName)?.colorB
        return color ? color : ''
        

    }
}

export interface Card {
    name: string;
    colorB: string
}