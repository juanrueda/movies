import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private moviesUrl = 'https://api.themoviedb.org/3/search/movie?api_key=178e27513c3c85134f9e58a5d30de67a';

  getMovies(query: string): Observable<any>{
    return this.http.get(this.moviesUrl +'&query='+query)
  }
}
