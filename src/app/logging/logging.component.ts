import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-logging',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logging.component.html',
})
export class LoggingComponent {
  constructor(public loggingService: LoggingService) {}
}
