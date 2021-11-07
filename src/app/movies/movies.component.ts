import { Component, OnInit } from '@angular/core';
import {SwapiMovieDataService} from '../services/swapi-movie-data.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private movie:SwapiMovieDataService) { }

  ngOnInit(): void {
    this.movie.getData().subscribe(data=>{
      console.log(data);
  
    })
  }

}
