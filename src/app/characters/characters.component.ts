import { Component, OnInit } from '@angular/core';
import {SwapiPeopleDataService} from '../services/swapi-people-data.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private character:SwapiPeopleDataService) { }

  ngOnInit(): void {

    this.character.getData().subscribe(data=>{
      console.log(data);

    })
  }

}
