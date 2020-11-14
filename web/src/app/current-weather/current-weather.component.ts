import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../icurrent-weather'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Ho Chi Minh City', 'VN')
      .subscribe((data) => (this.current = data))
  }
}
