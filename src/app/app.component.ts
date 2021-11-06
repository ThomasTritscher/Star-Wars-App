import { Component } from '@angular/core';
import {SwapiPeopleDataService} from './swapi-people-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StarWars';
  constructor(private swapiPeople:SwapiPeopleDataService){
    
    this.swapiPeople.getData().subscribe(data=>{
      console.log(data);

    })
  }
}

