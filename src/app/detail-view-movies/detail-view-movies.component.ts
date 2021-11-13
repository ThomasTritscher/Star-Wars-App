import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiMovieDataService } from '../services/swapi-movie-data.service'

@Component({
  selector: 'app-detail-view-movies',
  templateUrl: './detail-view-movies.component.html',
  styleUrls: ['./detail-view-movies.component.scss']
})
export class DetailViewMoviesComponent implements OnInit {


  selectedMovie:any;

  constructor(public route: ActivatedRoute, public movie:SwapiMovieDataService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {
      let movieId = param.get('index');

      if(movieId){

        this.movie.getMovieById(parseInt(movieId) + 1).subscribe(selectedMovie=>{
          console.log(selectedMovie);
        });

      }
    
    });
  }
}
