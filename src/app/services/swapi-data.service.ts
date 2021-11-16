import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SwapiDataService {
  constructor(public http: HttpClient) {}

  getMovies() {
    return this.http.get('https://swapi.dev/api/films/');
  }
  getMovieById(id: any) {
    return this.http.get('https://swapi.dev/api/films/' + id);
  }
  getCharacters() {
    return this.http.get('https://swapi.dev/api/people/');
  }
  getCharacterById(id: any) {
    return this.http.get('https://swapi.dev/api/people/' + id);
  }
  getPlanets() {
    return this.http.get('https://swapi.dev/api/planets/');
  }
  getPlanetById(id: any) {
    return this.http.get('https://swapi.dev/api/planets/' + id);
  }
  getStarships() {
    return this.http.get('https://swapi.dev/api/starships/');
  }
  getStarshipsById(id: any) {
    return this.http.get('https://swapi.dev/api/starships/' + id);
  }
  getVehicles() {
    return this.http.get('https://swapi.dev/api/vehicles/');
  }
  getVehicleById(id: any) {
    return this.http.get('https://swapi.dev/api/vehicles/' + id);
  }
  getSpecies() {
    return this.http.get('https://swapi.dev/api/species/');
  }
  getSpecieById(id: any) {
    return this.http.get('https://swapi.dev/api/species/' + id);
  }
}
