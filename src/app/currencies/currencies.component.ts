import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../services/currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  massiveFromJson: {item:string}[] = [];
  jsonFromLocalStorage: string | null = "Start" 
  constructor(private CurrenciesService:CurrenciesService) { }

  ngOnInit(): void {
    this.CurrenciesService.setResponsToLocalStorage();
    this.getMassive();
  };

  getMassive() {
    this.getString();
    if (this.jsonFromLocalStorage === null) {
      this.massiveFromJson = [{ item:"null"}]
    }else{
      this.massiveFromJson = JSON.parse(this.jsonFromLocalStorage)
      console.log(this.massiveFromJson);
    }
  };
    
    getString(): void {
    this.jsonFromLocalStorage = localStorage.getItem("RESPONSE")  
  };    

}
