import { Router } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { WeatherServicesService } from '../service/weather-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(public weatherService: WeatherServicesService) {}

  cel='active';
  far='no-active';
  temperature:any=null;
  celcius:any
  farheneit:any
  weatherDetails: any = [];
  cityWeatherData:any={};
 

  ngOnInit():void{
    this.cel='active'
    this.celcius=true
    this.farheneit=false
    if(this.cel==='active'){
      this.temperature= 80
    }
    let data: any = localStorage.getItem('cityWeatherData');
    console.log("dataaaa",data)
    this.cityWeatherData = JSON.parse(data);
    console.log("hhhh",this.cityWeatherData);
    
    this.temperature = (
      (this.weatherDetails['main'].temp - 32) *
      0.5556
    ).toFixed(0);
  }

  handleClick=(temp:any)=>{
    if(temp=='cel'){
     
      this.cel='active';
      this.far='noActive'
      this.celcius=true
      this.farheneit=false
    }
    if(temp=='far'){
    
      this.cel='noActive';
      this.far='active'
      this.celcius=false
      this.farheneit=true
    }
  }

  // getWeather(city:string):void{
  //   this.getWeatherData(city).subscribe((weatherDetails: any) => {
  //   this.cityWeatherData={data:weatherDetails};
  //   localStorage.setItem('weatherDetails',JSON.stringify(this.cityWeatherData));
  //   this.refresh();
  //   });
  //   }
    
  //   refresh() {
  //   this.router.navigate(['']).then(() => {
  //   window.location.reload();
  //   });
  //  }
   
}
