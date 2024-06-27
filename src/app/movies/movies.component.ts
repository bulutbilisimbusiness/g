import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieDetailComponent, RouterModule],
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
})
export class MoviesComponent {
  title: string = 'Movie List';
  movies: Movie[] = [];
  selectedMovie: Movie | undefined;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
  }
}
