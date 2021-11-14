import { Component, OnInit } from '@angular/core';
import { SwapiDataService } from '../services/swapi-data.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public charactersData:any = [];

  constructor( public data:SwapiDataService ) { }

  ngOnInit(): void {

    this.data.getCharacters().subscribe((response:any)=> {
      this.charactersData = response['results'];
      console.log(this.charactersData)
  
    })

   
  }

}
