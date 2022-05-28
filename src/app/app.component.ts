import { Component } from '@angular/core';
import { CurrenciesService } from './services/currencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private CurrenciesService:CurrenciesService ){}
  title = 'Converter-currencies';

  


}
