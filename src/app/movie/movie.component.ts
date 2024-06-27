import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  movies = [
    { title: 'Inception', director: 'Christopher Nolan' },
    { title: 'The Matrix', director: 'The Wachowskis' },
    { title: 'Interstellar', director: 'Christopher Nolan' },
  ];
}
