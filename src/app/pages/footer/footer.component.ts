import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) {}

  scrollTo(id: string): void {
    const currentUrl = this.router.url;

    if (currentUrl === '/home' || currentUrl === '/') {
      this.scrollToElement(id);
    } else {
      this.router.navigate(['/home']).then(() => {
        // Attendre un peu pour que le DOM du HomeComponent soit prêt
        setTimeout(() => this.scrollToElement(id), 100);
      });
    }
  }

  private scrollToElement(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const offset = 210;
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top - offset, behavior: 'smooth' });
    }
  }


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
