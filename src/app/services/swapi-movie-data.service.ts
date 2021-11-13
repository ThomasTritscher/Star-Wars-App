import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiMovieDataService {

  constructor(public http:HttpClient) {

  }

   getMovies(){
     return this.http.get('https://swapi.dev/api/films/');

  }

  getMovieById(id:any){
    console.log(id);
    return this.http.get('https://swapi.dev/api/films/'+id);
 }
   

}
