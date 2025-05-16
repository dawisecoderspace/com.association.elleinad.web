import { Component, AfterViewInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit() {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    const status = document.getElementById('statusMessage') as HTMLElement;

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // empêche la redirection

      const data = new FormData(form);

      fetch('https://formsubmit.co/elleinad2008@gmail.com', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            status.innerText = '✅ Message envoyé avec succès !';
            form.reset();
          } else {
            status.innerText = '❌ Une erreur est survenue.';
          }
        })
        .catch(() => {
          status.innerText = '❌ Une erreur réseau est survenue.';
        });
    });
  }
}
