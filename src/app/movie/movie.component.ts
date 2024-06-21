import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie',
  imports: [CommonModule],
  standalone: true,
  templateUrl: '../movie/movie.component.html',
  styleUrls: ['../movie/movie.component.css'],
})
export class MovieComponent {
  movies = [
    { title: 'Inception', director: 'Christopher Nolan' },
    { title: 'The Matrix', director: 'The Wachowskis' },
    { title: 'Interstellar', director: 'Christopher Nolan' },
  ];
}
