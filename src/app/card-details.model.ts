export class Data {
    cards: Card[] = [{name: 'Card1', color: '#9f9fff', colorB: 'blue'}]

    getCard(cardName: string): Card | undefined {
        let card = this.cards.find(e => e.name == cardName)
        return card 
        

    }
}

export interface Card {
    name: string;
    color: string
    colorB: string
}