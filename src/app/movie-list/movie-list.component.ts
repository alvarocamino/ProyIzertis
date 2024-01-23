// movie-list.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  query: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  searchMovies() {
    this.movieService.searchMovies(this.query).subscribe((data: any) => {
      this.movies = data.Search || [];
    });
  }

  showMovieDetails(id: string) {
    // Abre una nueva pestaña con los detalles de la película
    const url = `/detail/${id}`;
    window.open(url, '_blank');
  }
}

