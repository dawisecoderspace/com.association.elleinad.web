import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NgIf, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  baseHref = '/com.association.elleinad.web/';

  showBubble = false;
  bubbleX = 0;
  bubbleY = 0;

  updateMousePosition(event: MouseEvent) {
    const offset = 15;
    this.bubbleX = event.clientX + offset;
    this.bubbleY = event.clientY + offset;
  }
  
  menuOuvert = false;

  toggleMenu() {
    this.menuOuvert = !this.menuOuvert;
  }

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
