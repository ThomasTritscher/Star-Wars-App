import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { observable } from 'rxjs';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { DetailViewCharactersComponent } from './detail-view-characters/detail-view-characters.component';
import { DetailViewMoviesComponent } from './detail-view-movies/detail-view-movies.component';
import { DetailViewPlanetsComponent } from './detail-view-planets/detail-view-planets.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MoviesComponent } from './movies/movies.component';
import { ObservableComponent } from './observable/observable.component';
import { PlanetsComponent } from './planets/planets.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [

  {path: '',component:ObservableComponent},
  {path: 'movies', component:MoviesComponent},
  {path: 'planets', component:PlanetsComponent},
  {path: 'characters', component:CharactersComponent},
  {path: 'detailViewMovies/:id', component:DetailViewMoviesComponent},
  {path: 'detailViewCharacters/:id', component:DetailViewCharactersComponent},
  {path: 'detailViewPlanets/:id', component:DetailViewPlanetsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
