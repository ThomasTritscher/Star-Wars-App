import { Component, OnInit } from '@angular/core';
import {SwapiPlanetDataService} from '../services/swapi-planet-data.service'

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private planet:SwapiPlanetDataService) { }

  ngOnInit(): void {

    this.planet.getData().subscribe(data=>{
      console.log(data);

    })
  }

}
