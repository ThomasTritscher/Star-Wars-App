import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiDataService {

  constructor(public http:HttpClient) {

  }

   getMovies(){
     return this.http.get('https://swapi.dev/api/films/');

  }

  getMovieById(id:any){
    return this.http.get('https://swapi.dev/api/films/'+id);

  }

  getCharacters(){
    return this.http.get('https://swapi.dev/api/people/');

 }
 getCharacterById(id:any){
  return this.http.get('https://swapi.dev/api/people/'+id);

}
   

}
