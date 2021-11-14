import { Component, OnInit } from '@angular/core';
import { SwapiDataService } from '../services/swapi-data.service'


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  public planetData:any = [];

  constructor( public data:SwapiDataService ) { }

  ngOnInit(): void {

    this.data.getPlanets().subscribe((response:any)=> {
      this.planetData = response['results'];
      console.log(this.planetData)
  
    })

   
  }

}
