// src/app/cards/cards.page.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importe o HttpClient

@Component({
  selector: 'app-cards',
  templateUrl: './cartoes.page.html',
  styleUrls: ['./cartoes.page.scss'],
})
export class CardsPage implements OnInit {
  mtgCards: any[] = [];
  filteredCards: any[] = [];  
  searchTerm: string = '';  

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMTGCards();
  }

 
  private loadMTGCards() {

    const apiUrl = '';

    this.getMTGCards(apiUrl).subscribe((data: any) => {
      this.mtgCards = data.cards;
      this.filteredCards = this.mtgCards;  
    });
  }

  
  private getMTGCards(apiUrl: string) {
    return this.http.get(apiUrl);
  }

  
  filterCards() {
    this.filteredCards = this.mtgCards.filter(card =>
      card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  reloadCartoes() {
    this.loadMTGCartoes();
  }
}
