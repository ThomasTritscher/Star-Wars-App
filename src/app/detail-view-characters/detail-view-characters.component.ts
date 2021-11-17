import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiDataService } from '../services/swapi-data.service'

@Component({
  selector: 'app-detail-view-characters',
  templateUrl: './detail-view-characters.component.html',
  styleUrls: ['./detail-view-characters.component.scss']
})
export class DetailViewCharactersComponent implements OnInit {

  constructor( public route: ActivatedRoute, public data:SwapiDataService ) { }

  selectedCharacter:any = [];
  moviesData:any = [];
  vehiclesData:any = [];
  starshipsData:any = [];

  characterImages:any = ['../assets/img/luke-skywalker.jpg', '../assets/img/c3po.jpg', '../assets/img/r2d2.jpg', '../assets/img/dart vader.jpg', '../assets/img/leia-organa.jpg', '../assets/img/owen-lars.jpg', '../assets/img/beru-whitesun-lars.jpg', '../assets/img/r5-d4-droid.jpg', '../assets/img/biggs-bust-darklighter.jpg', '../assets/img/obi-wan-kenobi-ben.jpg'];
  characterImage:any = [];

  ngOnInit(){

    this.route.paramMap.subscribe(param =>{
      let characterId = param.get('id');
      console.log(characterId);

      if(characterId){
        this.data.getCharacterById(parseInt(characterId) + 1).subscribe(async(response:any)=>{
          this.selectedCharacter = response;
          this.moviesData = await this.data.getMovies(this.selectedCharacter);
          this.vehiclesData = await this.data.getVehicles(this.selectedCharacter);
          this.starshipsData = await this.data.getStarships(this.selectedCharacter);
          console.log(this.selectedCharacter)
        });
      }
      if(characterId){
        this.characterImage = this.characterImages[characterId];
        console.log(this.characterImage);
      }
      
    });
  }

}
