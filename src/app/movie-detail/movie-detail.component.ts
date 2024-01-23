// movie-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Utiliza el operador de coalescencia nula para proporcionar un valor predeterminado si movieId es null
    const movieId: string = this.route.snapshot.paramMap.get('id') ?? '';
    this.getMovieDetails(movieId);
  }

  getMovieDetails(id: string) {
    this.movieService.getMovieDetails(id).subscribe((data: any) => {
      this.movie = data;
    });
  }
}

