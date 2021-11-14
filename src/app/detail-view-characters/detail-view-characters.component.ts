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

  ngOnInit(): void {

    this.route.paramMap.subscribe(param =>{
      let characterId = param.get('id');
      console.log(characterId);

      if(characterId){
        this.data.getCharacterById(parseInt(characterId) + 1).subscribe((response:any)=>{
          this.selectedCharacter = response;
          console.log(this.selectedCharacter)
        });
      }
      
    });
  }

}
