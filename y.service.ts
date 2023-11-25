import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MtgService {
  private apiUrl = ''; 

  constructor(private http: HttpClient) {}

  getCards(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCardDetails(cardId: string): Observable<any> {
    const cardDetailsUrl = `${this.apiUrl}/${cardId}`;
    return this.http.get(cardDetailsUrl);
  }
}
