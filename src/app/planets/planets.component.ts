import { Component, OnInit } from '@angular/core';
import { SwapiDataService } from '../services/swapi-data.service'


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  public planetData:any = [];
  public planetImages:any = ['../assets/img/Tatooine.png', '../assets/img/Alderaan.jpg.jpg', '../assets/img/Yavin_IV.jpg', '../assets/img/Hoth.jpg', '../assets/img/Dagobah.png', '../assets/img/Bespin.jpg', '../assets/img/Endor.jpg', '../assets/img/Naboo.png', '../assets/img/Coruscant.jpg', '../assets/img/Kamino.jpg'];

  constructor( public data:SwapiDataService ) { }

  ngOnInit(): void {

    this.data.getAllPlanets().subscribe((response:any)=> {
      this.planetData = response['results'];
      console.log(this.planetData)
  
    })

   
  }

}
