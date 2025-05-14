import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NgFor, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})

export class HomeComponent {
  titlesDescription = ["Historique", "Vision", "Objectifs", "Cibles"]
  articlesDescription = [
    "L’Association Elleinad Allo La Terre est une association à but non lucratif, créée par Madame Danielle Neukom de nationalité Suisse dans le but d’aider les femmes rurales et les jeunes en milieu rural, urbain et périurbain. L’AEAT est créée le 04 Juin 2009 à Genève, puis reconnue au Sénégal le 17 Juin 2010. « Un soir, assise dans son bureau à faire de la comptabilité, soudain une voix me dit : « vas au Sénégal .Ce fut le début de l’aventure humanitaire qui a conduit à la création de l’Association Elleinad Allo La Terre (AEAT) » déclare Mme Danielle Jocelyne Neukom.",
    "La vision de l’AEAT est d’arriver, à travers le concept « Femmes, culture et Solidarité, à bâtir un développement communautaire au bénéfice des femmes et des enfants. Notre mission est d’organiser, de fournir un encadrement technique et financier aux femmes, jeunes et enfants (monde rural, banlieue), promouvoir et soutenir une dynamique de solidarité entre les GIE du réseau Allô la terre à travers le concept de partenariat commune, promouvoir le développement du leadership féminin et une meilleure expression des jeunesses.",
    "Appuyer l’autonomisation des femmes à travers l’octroi de financement pour la constitution de microcrédit. Promouvoir la solidarité entre toutes les femmes en mettant en place un fond communautaire pour le financement de leurs activités et un réseau d’échanges, de partage et de valorisation de leurs productions respectives. Encourager l’implication de tous les acteurs sociaux, économiques et culturels ainsi qu’institutionnels dans la recherche de solution durable aux problèmes des femmes et des jeunes du monde rural et périurbain.",
    "De manière générale,l’AEAT a comme cible les femmes, les jeunes et les enfants en situation difficile. Les femmes vivant en zone rurale et périurbain constituent notre cœur de cible du fait du manque d’infrastructures sociales de base devant alléger leur quotidien. Nous appuyons les jeunes par l’octroi de bourses d’études, et de petites subventions. Les actions en direction des enfants concernent les Dahras, les orphelinats et pouponnières : Encourager l’éducation et la formation des enfants à travers l’octroi de bourses de formation, de subvention."
  ]
}
