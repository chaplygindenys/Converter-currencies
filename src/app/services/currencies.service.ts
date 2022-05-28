import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  private apiUrl: string = 'https://api.monobank.ua/bank/currency';
   private govUaUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";
  constructor(private http: HttpClient) { }
  
  
  setResponsToLocalStorage(): void {
    this.getResponse()
      .subscribe(res => window.localStorage.setItem("RESPONSE", JSON.stringify(res))
      );
   }; 

  getResponse(): Observable<Object>{
   return this.http.get<Object>(this.govUaUrl); 
  };
}
