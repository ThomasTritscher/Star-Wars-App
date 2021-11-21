import { Component, OnInit } from '@angular/core';
import { SwapiDataService } from '../services/swapi-data.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movieData:any = [];
  public movieImages:any = ['assets/img/star-wars-episode-iv-a-new-hope.jpg', 'assets/img/star-wars-episode-v-the-empire-strikes-back.jpg', 'assets/img/star-wars-episode-vi-return-of-the-jedi.jpg', 'assets/img/star-wars-episode-i-the-phantom-menace.jpg', 'assets/img/star-wars-episode-ii-attack-of-the-clones.jpg', 'assets/img/star-wars-episode-iii-revenge-of-the-sith.jpg'];

  constructor( public data:SwapiDataService ) { }
  
  ngOnInit(): void {

    this.data.getAllMovies().subscribe((response:any)=> {
      this.movieData = response['results'];
      console.log(this.movieData)
  
    })

  }

}
