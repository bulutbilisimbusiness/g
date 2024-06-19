import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies/movies.component'; // MoviesComponent'i import edin

@Component({
  selector: 'app-root',
  standalone: true, // Standalone bileşen olarak işaretleyin
  imports: [CommonModule, FormsModule, RouterOutlet, MoviesComponent], // Gerekli modülleri ve bileşenleri ekleyin
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Angular App';
}
