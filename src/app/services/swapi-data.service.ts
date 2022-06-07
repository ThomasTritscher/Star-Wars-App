import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../Interfaces/Movies';


@Injectable({
  providedIn: 'root',
})
export class SwapiDataService {
  constructor(public http: HttpClient) {}

  getAllMovies(){
    return this.http.get('https://swapi.dev/api/films/');
  }

  async getMovies(selected:any) {
    let movies = [];
    for(let i = 0; i < selected.films.length; i++){
      const film = await this.http.get(selected.films[i]).toPromise();
      movies.push(film);
    }
    return movies;
  }

  getMovieById(id: any) {
    return this.http.get('https://swapi.dev/api/films/' + id);
  }
  getAllCharacters() {
    return this.http.get('https://swapi.dev/api/people/');
  }
 
  async getCharacters(selected:any) {
    let chars = [];
    for(let i = 0; i < selected.characters.length; i++){
      const char = await this.http.get(selected.characters[i]).toPromise();
      chars.push(char);
    }
    return chars;
  }

  getCharacterById(id: any) {
    return this.http.get('https://swapi.dev/api/people/' + id);
  }
  getAllPlanets() {
    return this.http.get('https://swapi.dev/api/planets/');
  }
  async getPlanets(selected:any) {
    let worlds = [];
    for(let i = 0; i < selected.planets.length; i++){
      const world = await this.http.get(selected.planets[i]).toPromise();
      worlds.push(world);
    }
    return worlds;
  }
  
  getPlanetById(id: any) {
    return this.http.get('https://swapi.dev/api/planets/' + id);
  }

  getAllStarships() {
    return this.http.get('https://swapi.dev/api/starships/');
  }
  async getStarships(selected:any) {
    let starships = [];
    for(let i = 0; i < selected.starships.length; i++){
      const starship = await this.http.get(selected.starships[i]).toPromise();
      starships.push(starship);
    }
    return starships;
  }
  getStarshipsById(id: any) {
    return this.http.get('https://swapi.dev/api/starships/' + id);
  }
  getAllVehicles() {
    return this.http.get('https://swapi.dev/api/vehicles/');
  }
  async getVehicles(selected:any) {
    let vehicles = [];
    for(let i = 0; i < selected.vehicles.length; i++){
      const vehicle = await this.http.get(selected.vehicles[i]).toPromise();
      vehicles.push(vehicle);
    }
    return vehicles;
  }
  getVehicleById(id: any) {
    return this.http.get('https://swapi.dev/api/vehicles/' + id);
  }
  getAllSpecies() {
    return this.http.get('https://swapi.dev/api/species/');
  }
 
  getSpecieById(id: any) {
    return this.http.get('https://swapi.dev/api/species/' + id);
  }

  async getResidents(selected:any) {
    let resis = [];
    for(let i = 0; i < selected.residents.length; i++){
      const res = await this.http.get(selected.residents[i]).toPromise();
      resis.push(res);
    }
    return resis;
  }
}
