import { Component, AfterViewInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FooterComponent, NgFor],
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


  groupes = [
    {
      nom: 'Fatick',
      contacts: [
        { numero: '01', localite: 'Joal', responsable: 'Présidente', contact: '+221 77 222 35 52' },
        { numero: '02', localite: 'Ndianda', responsable: 'Marth Diagne', contact: '+221 77 614 29 87' },
        { numero: '03', localite: 'Fadiale', responsable: 'Eliane', contact: '+221 77 766 21 18' },
        { numero: '04', localite: 'Dioneware', responsable: 'Na Fatou Sarr', contact: '+221 77 449 35 42' },
        { numero: '05', localite: 'Ndiaganio', responsable: 'Mary Gningue', contact: '+221 77 549 33 18' },
        { numero: '06', localite: 'Dioyine', responsable: 'Mado Diouf', contact: '+221 77 173 08 22' },
        { numero: '07', localite: 'AELMAS', responsable: 'Mme Badiane', contact: '+1(678) 913 88 70' },
      ]
    },
    {
      nom: 'Dakar',
      contacts: [
        { numero: '08', localite: 'Grand-Dakar', responsable: 'Awa N\'diaye', contact: '+221 77 000 00 00' },
        { numero: '09', localite: 'Grand-Dakar', responsable: 'Bousso Dieng', contact: '+221 77 000 00 00' },
        { numero: '10', localite: 'Yeumbeul', responsable: 'Diodio Camara', contact: '+221 77 000 00 00' },
        { numero: '11', localite: 'Yeumbeul', responsable: 'Khady Sarr', contact: '+221 77 000 00 00' },
        { numero: '12', localite: 'Yeumbeul', responsable: 'Ndeye Malick Mbow', contact: '+221 77 000 00 00' },
        { numero: '13', localite: 'Guédiawaye', responsable: 'Mame Anta', contact: '+221 77 000 00 00' },
        { numero: '14', localite: 'HLM Grand Médine', responsable: 'Mame Séne', contact: '+221 77 000 00 00' },
        { numero: '15', localite: 'Pikine', responsable: 'Penda DIOP Sarr', contact: '+221 77 111 11 11' }
      ]
    },
    {
      nom: 'Kaolack',
      contacts: [
        { numero: '16', localite: 'Léona', responsable: 'Thérèse', contact: '+221 77 200 33 56' },
        { numero: '17', localite: 'Ndiafatte', responsable: 'Aissata Barry', contact: '+221 77 434 88 38' },
        { numero: '18', localite: 'Tébène', responsable: 'Nayedio Sow', contact: '+221 77 289 51 15' }
      ]
    },
    {
      nom: 'Louga',
      contacts: [
        { numero: '19', localite: 'Léona', responsable: 'Fatou Dia', contact: '+221 77 135 40 42' },
        { numero: '20', localite: 'Dahra Djoloff', responsable: 'Penda Diop', contact: '+221 77 319 33 92' }
      ]
    },
    {
      nom: 'Podor',
      contacts: [
        { numero: '21', localite: 'Podor', responsable: 'Fatoumata Soumaré', contact: '+221 77 740 12 05' }
      ]
    },
    {
      nom: 'Thiés',
      contacts: [
        { numero: '22', localite: 'Thiés', responsable: 'Binta Ba', contact: '+221 77 357 70 73' },
        { numero: '23', localite: 'Thiés', responsable: 'Adja Khar N\'diaye', contact: '+221 77 804 35 48' }
      ]
    }
  ];

}
