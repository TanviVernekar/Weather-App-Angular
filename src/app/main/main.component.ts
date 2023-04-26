import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WeatherServicesService } from '../service/weather-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(
    public weatherService: WeatherServicesService,
    public router: Router
  ) {}
  active = 'active';
  date: any;
  text: any = '';
  cityResults: any = [];
  cityWeatherData:any={};
  ngOnInit(): void {
    this.date = new Date();
  }

  handleChange(event: any): void {
    this.weatherService.searchApi(event).subscribe((cityResults: any) => {
      console.log("cityy",cityResults);
      this.cityResults = cityResults;
    });
    console.log("event",event);
  }

  handleCityClick(city: any) {
    // console.log(city);
    this.text = city;
    this.weatherService.getWeather(city).subscribe((weatherDetails: any) => {
      console.log("fstfsyatfyf",this.cityWeatherData);
      this.cityWeatherData={data:weatherDetails};
      localStorage.setItem('cityWeatherData', JSON.stringify(this.cityWeatherData));
      this.refresh();
    });
    this.cityResults = [];
  }

  refresh() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
    // localStorage.clear();
  }
}
