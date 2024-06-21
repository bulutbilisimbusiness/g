import { Component } from '@angular/core';
import { Movie } from '../movie';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: 'movies.component.html',
})
export class MoviesComponent {
  title: string = 'Movie Listt';
  movie: Movie = {
    id: 1,
    name: 'Movie Name',
  };

  getName() {
    return this.title;
  }
}
