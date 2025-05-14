import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'com.association.elleinad.web';
  scrollToTop(event: Event) {
    event.preventDefault(); // empêche le comportement par défaut du lien
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
