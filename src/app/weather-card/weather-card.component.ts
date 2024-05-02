import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  currentDate: Date = new Date();

  query: string = '';
  weather: any;

  api = {
    key: '175f50ac9e5c411302cb91bb59fb5df8',
    url: 'https://api.openweathermap.org/data/2.5/',
  };

  constructor(private http: HttpClient) {}

  search(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.http
        .get(
          `${this.api.url}weather?q=${this.query}&units=metric&APPID=${this.api.key}`
        )
        .subscribe((result: any) => {
          this.weather = result;
          this.query = '';
        });
    }
  }
}
