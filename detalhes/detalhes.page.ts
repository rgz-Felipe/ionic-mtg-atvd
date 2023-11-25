// src/app/card-details/card-details.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MtgService } from '../service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-detalhes.page.html',
  styleUrls: ['./card-deta.page.scss'],
})
export class CardDetailsPage implements OnInit {
  cardId: string;
  cardDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private mtgService: MtgService) {}

  ngOnInit() {
    this.cardId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadCardDetails();
  }

  private loadCardDetails() {
    this.mtgService.getCardDetails(this.cardId).subscribe((data: any) => {
      this.cardDetails = data.card;
    });
  }
}
