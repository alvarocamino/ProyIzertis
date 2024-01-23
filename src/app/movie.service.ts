import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '64241b91'; // Reemplaza con tu API key de OMDb
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${query}`;
    return this.http.get(url);
  }

  getMovieDetails(id: string): Observable<any> {
    const apiUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}`;
    return this.http.get(apiUrl);
  }
}