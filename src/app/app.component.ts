import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NewsDisplayComponent} from "./news-display/news-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iwi-contentApp';
}
