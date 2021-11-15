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
  public planetImages:any = ['../assets/img/Tatooine.png', '../assets/img/Alderaan.jpg.jpg', '../assets/img/Yavin_IV.jpg', '../assets/img/Hoth.jpg', '../assets/img/Dagobah.png', '../assets/img/Bespin.jpg', '../assets/img/Endor.jpg', '../assets/img/Naboo.png', '../assets/img/Coruscant.jpg', '../assets/img/Kamino.jpg'];
  planetImage:any = [];

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
      if(planetId){
        this.planetImage = this.planetImages[planetId];
        console.log(this.planetImage);
      }
      
    });
  }

}
