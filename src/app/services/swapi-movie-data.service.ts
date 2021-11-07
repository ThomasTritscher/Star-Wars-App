import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiMovieDataService {

  constructor(private http:HttpClient) {
   }

   getData(){
     let url="https://swapi.dev/api/films/";
     return this.http.get(url);
   }
}
