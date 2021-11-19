import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StartComponent } from './start/start.component';
import { MatCardModule } from '@angular/material/card';
import { DetailViewMoviesComponent } from './detail-view-movies/detail-view-movies.component';
import { MatChipsModule } from '@angular/material/chips';
import { DetailViewCharactersComponent } from './detail-view-characters/detail-view-characters.component';
import { DetailViewPlanetsComponent } from './detail-view-planets/detail-view-planets.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddPlanetComponent } from './add-planet/add-planet.component';
import { AddCharacterComponent } from './add-character/add-character.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CharactersComponent,
    PlanetsComponent,
    MainNavComponent,
    StartComponent,
    DetailViewMoviesComponent,
    DetailViewCharactersComponent,
    DetailViewPlanetsComponent,
    AddMovieComponent,
    AddPlanetComponent,
    AddCharacterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],

  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
 ],
  bootstrap: [AppComponent]

})
export class AppModule { }
