import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { DetailViewMoviesComponent } from './detail-view-movies/detail-view-movies.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MoviesComponent } from './movies/movies.component';
import { PlanetsComponent } from './planets/planets.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [

  {path: '',component:StartComponent},
  {path: 'movies', component:MoviesComponent},
  {path: 'planets', component:PlanetsComponent},
  {path: 'characters', component:CharactersComponent},
  {path: 'detailViewMovies', component:DetailViewMoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
