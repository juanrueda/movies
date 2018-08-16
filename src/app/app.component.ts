import { Component } from '@angular/core';
import { Movies } from './movies';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies database';

  movie: Movies;
  movies: Movies[];
  query: string;
  value = '';
  selectedMovie: Movies;

  constructor(private movieService: MovieService){}

  getMovies(): void{
    this.movieService.getMovies(this.query)
      .subscribe(movies => {
        this.movies = movies.results
      });
  }

  onEnter(value: string) {
    this.value =  value;
    this.getMovies();
  }

  onSelect(movie: Movies): void {
    this.selectedMovie = movie;
}
}
