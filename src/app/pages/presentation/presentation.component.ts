import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-presentation',
  imports: [NgFor, FooterComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {}
