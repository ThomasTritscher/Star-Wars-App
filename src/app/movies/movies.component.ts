import { Component, OnInit } from '@angular/core';
import { SwapiMovieDataService } from '../services/swapi-movie-data.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieData:any = [];
  movieImages:any = ['../assets/img/star-wars-episode-iv-a-new-hope.jpg', '../assets/img/star-wars-episode-v-the-empire-strikes-back.jpg', '../assets/img/star-wars-episode-vi-return-of-the-jedi.jpg', '../assets/img/star-wars-episode-i-the-phantom-menace.jpg', '../assets/img/star-wars-episode-ii-attack-of-the-clones.jpg', '../assets/img/star-wars-episode-iii-revenge-of-the-sith.jpg'];

  constructor(public movie:SwapiMovieDataService) { }
  
  ngOnInit(): void {

    this.movie.getMovies().subscribe((response:any)=> {
      this.movieData = response['results'];
      console.log(this.movieData)
  
    })

  }

}
