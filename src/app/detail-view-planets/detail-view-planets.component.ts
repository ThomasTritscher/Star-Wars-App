import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiDataService } from '../services/swapi-data.service'

@Component({
  selector: 'app-detail-view-planets',
  templateUrl: './detail-view-planets.component.html',
  styleUrls: ['./detail-view-planets.component.scss']
})
export class DetailViewPlanetsComponent implements OnInit {

  selectedPlanet:any = [];

  constructor( public route: ActivatedRoute, public data:SwapiDataService ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param =>{
      let planetId = param.get('id');
      console.log(planetId);

      if(planetId){
        this.data.getPlanetById(parseInt(planetId) + 1).subscribe((response:any)=>{
          this.selectedPlanet = response;
          console.log(this.selectedPlanet)
        });
      }
      
    });
  }

}
