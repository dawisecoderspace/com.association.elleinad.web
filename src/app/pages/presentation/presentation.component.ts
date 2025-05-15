import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-presentation',
  imports: [NgFor, NgIf, FooterComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})

export class PresentationComponent {
  articles = [
    {
      title: 'Association Elleinad Allo La Terre (AEAT)',
      paragraphs: [
        `<b>Fondée en 2009 à Genève par Madame Danielle Jocelyne Neukom, 
        l’Association Elleinad Allo La Terre (AEAT)</b> est une organisation à but non lucratif, 
        reconnue officiellement au Sénégal depuis 2010. Sa mission : <b>soutenir les femmes rurales, 
        les jeunes et les enfants</b>, en particulier dans les zones rurales, urbaines défavorisées 
        et périurbaines.`,
        `<i>« Un soir, assise dans mon bureau à faire de la comptabilité, soudain une voix me dit : 
        "Vas au Sénégal." Ce fut le début de l’aventure humanitaire qui a conduit à la création de l’AEAT. » 
        <br>— Mme Danielle Jocelyne Neukom, Fondatrice</i>`
      ]
    },
    {
      title: 'Notre Vision',
      paragraphs: [
        `À travers le concept <b>« Femmes, Culture et Solidarité »</b>, l’AEAT œuvre pour un 
        <b>développement communautaire inclusif et durable</b>. Nous croyons en une société 
        où les femmes, les jeunes et les enfants sont des acteurs à part entière du changement.`
      ]
    },
    {
      title: 'Nos Objectifs',
      listItems: [
        `<b>Autonomiser les femmes</b> en facilitant l’accès à des financements solidaires, 
        notamment via la mise en place de fonds communautaires et de microcrédits.`,
        `<b>Renforcer la solidarité féminine</b> à travers des réseaux de partage, de 
        valorisation des savoir-faire et des productions.`,
        `<b>Encourager l’implication collective</b> dans la recherche de solutions durables aux 
        défis du monde rural.`,
        `<b>Soutenir la jeunesse et l’enfance</b> par l’octroi de bourses d’études, de formations, 
        et d’aides aux Dahras, orphelinats et pouponnières.`
      ]
    },
    {
      title: 'Nos Bénéficiaires',
      paragraphs: ['Nos actions s’adressent prioritairement :'],
      listItems: [
        `<b>Aux femmes en milieu rural et périurbain</b>, confrontées à un manque d’infrastructures sociales de base.`,
        `Aux <b>jeunes</b>, soutenus à travers des bourses et de petites subventions.`,
        `Aux <b>enfants en situation difficile</b>, notamment dans les structures d’accueil, avec un appui à l’éducation et à la santé.`
      ]
    },
    {
      title: 'Notre Engagement',
      paragraphs: ['L’AEAT s’engage pour :'],
      listItems: [
        `Un <b>leadership féminin fort</b> et valorisé.`,
        `La <b>coopération entre groupements de femmes (GIE)</b> dans un esprit de partenariat.`,
        `Une <b>solidarité active</b> comme moteur de transformation sociale.`
      ]
    }
  ];
}

