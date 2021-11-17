import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiDataService } from '../services/swapi-data.service'

@Component({
  selector: 'app-detail-view-movies',
  templateUrl: './detail-view-movies.component.html',
  styleUrls: ['./detail-view-movies.component.scss']
})
export class DetailViewMoviesComponent implements OnInit {


  selectedMovie:any = [];
  charactersData:any = [];
  planetsData:any = [];
  starshipsData:any = [];
  vehiclesData:any = [];
  movieImages:any = ['../assets/img/star-wars-episode-iv-a-new-hope.jpg', '../assets/img/star-wars-episode-v-the-empire-strikes-back.jpg', '../assets/img/star-wars-episode-vi-return-of-the-jedi.jpg', '../assets/img/star-wars-episode-i-the-phantom-menace.jpg', '../assets/img/star-wars-episode-ii-attack-of-the-clones.jpg', '../assets/img/star-wars-episode-iii-revenge-of-the-sith.jpg'];
  movieImage:any = [];
  

  constructor(public route: ActivatedRoute, public data:SwapiDataService) { }

  ngOnInit(){
    this.route.paramMap.subscribe(param =>{
      let movieId = param.get('id');
      console.log(movieId);

  
      if(movieId){
        
        this.data.getMovieById(parseInt(movieId) + 1).subscribe(async (response:any)=>{
          this.selectedMovie = response;
          this.charactersData = await this.data.getCharacters(this.selectedMovie);
          this.planetsData = await this.data.getPlanets(this.selectedMovie);
          this.starshipsData = await this.data.getStarships(this.selectedMovie);
          this.vehiclesData = await this.data.getVehicles(this.selectedMovie);
          console.log(this.selectedMovie, this.charactersData, this.planetsData);
        });

      }

      if(movieId){
        this.movieImage = this.movieImages[movieId];
        console.log(this.movieImage);
      }

    });
  }
}
