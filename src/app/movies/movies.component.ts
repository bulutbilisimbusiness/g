import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  standalone: true,
  templateUrl: '../movies/movies.component.html',
})
export class MoviesComponent {
  movies = [
    { title: 'Inception', director: 'Christopher Nolan' },
    { title: 'The Matrix', director: 'The Wachowskis' },
    { title: 'Interstellar', director: 'Christopher Nolan' },
  ];
}
