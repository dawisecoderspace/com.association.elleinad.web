import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  scrollToTop(event: Event) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(private router: Router) {}

  navigateToSection(event: Event, targetId: string) {
    event.preventDefault();

    if (this.router.url.startsWith('/presentation')) {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 215;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }
    } else {
      this.router.navigate(['/presentation'], {
        state: { scrollToId: targetId }
      });
    }
  }
}
