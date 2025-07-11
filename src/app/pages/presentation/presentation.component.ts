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
  baseHref = '/com.association.elleinad.web/';
  
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




  // GROUPEMENTS DES FEMMES SENEGAL
  groupements = [
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'DIOHINE',
      action: 'Autonomisation',
      params: `
        <b>2005 - 2012</b> <br>
        <br>
        Microcrédit <br>
        Équipement des femmes en moissonneuse <br>
        <br>
        <i>Production agricole</i> <br> 
        <i>Achat de décortiqueuse de Mil</i> <br>
        <i>Les femmes des 70 Village du CR</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'NDIAGANIAO',
      action: 'Autonomisation',
      params: `
        <b>2005 - 2010</b>
        <br>
        <br>
        Microcrédit <br>
        Equipement en machine de presse huile <br>
        Générateur pour le forage <br>
        <br>
        <i>Production agricole et maraichères</i> <br>
        <i>Production d’huile d’arachide et d’aliment de bétail</i> <br>
        <i>Femmes des 34 villages du CR</i> <br>
        <i>Femmes de 3 villages : koulokk, keur cheikh, Sangué</i> <br>
        <i>Femmes de Ndiaganiao commune</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'NIORO',
      action: 'Eau et environnement',
      params: `
        <b>2010 - 2013</b> <br>
        <br>
        Microcrédit <br>
        Appui technique et financier<br>
        Réfection de puits du quartier Sud 3 <br>
        <br>
        <i>Programme de lutte contre le ravinement du CJR</i> <br>
        <i>Production et vente de petits ruminants</i> <br>
        <i>Production d’oseille bio (Bissap Bio)</i> <br>
        <i>Lutte contre le ravinement des surfaces arables</i> (CJR)
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'DIONEWAR',
      action: 'Autonomisation',
      params: `
        <b>2007</b> <br>
        <br>
        Microcrédit <br>
        Production de produits halieutiques <br>
        Festival des iles du Saloum <br>
        Programme Zéro plastique sur l’ile <br>
        <br>
        <i>Environnement et Écotourisme</i> <br>
        <i>Fédération des GIE</i> <br>
        <i>Mandimo</i> <br>
        <i>Association des éco guident</i> <br>
        <i>Interpole Guiss-guiss</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'CAP SKI RING',
      action: 'Environnement',
      params: `
        <b>2007</b> <br>
        <br>
        Campagnes de sensibilisation <br>
        Protection de la mangrove <br>
        <br>
        <i>Protection de la mangrove</i> <br>
        <i>Association Jah Enab</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-ndianda.png",
      title: 'NDIANDA',
      action: 'Autonomisation',
      params: `
        <b>2007</b> <br>
        <br>
        Microcrédit <br>
        <br>
        <i>Association les amies de Elleinad</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-joal.png",
      title: 'JOAL',
      action: 'Autonomisation',
      params: `
        <b>2007</b> <br>
        <br>
        Microcrédit <br>
        <br>
        <i>Production de produits halieutiques</i> <br>
        <i>Association des femmes catholique de Joal</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'NORD FOIRE (DAKAR)',
      action: 'Autonomisation',
      params: `
        <b>2008</b> <br>
        <br>
        Microcrédit <br>
        Formation couture des techniciennes de surface domestique <br>
        <br>
        <i>Renforcement des capacités des techniciennes</i> <br>
        <i>Association de femmes de la Cité AELMAS</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'MBOUR',
      action: '(Appui) Associations',
      params: `
        2012 <br>
        <br>
        Initiatives culturelles pour les enfants déshérités <br>
        <br>
        <i>Protection aux enfants déshérités</i> <br>
        <i>Association enfant du monde</i> <br>
        <i>Darha de l’espoir</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'GRAND-DAKAR',
      action: 'Autonomisation',
      params: `
        <b>2012</b> <br>
        <br>
        Programme de lutte contre les violences <br>
        Sexistes & urbaines <br>
        <br>
        <i>Mis en place d’une unité de distribution</i> <br>
        <i>Produits alimentaires pour appuyer les gargotières</i> <br>
        <i>Lutte contre les violences faites aux femmes</i> <br>
        <i>Union des femmes de Grand-Dakar</i> <br>
        <i>Mouvement jeunesse et micro</i> <br>
        <i>Collectif des gargotières de Grand-Dakar</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'YEUMBEUL NORD',
      action: 'Autonomisation',
      params: `
        <b>2012</b> <br>
        <br>
        Microcrédit <br>
        Encadrement technique <br>
        <br>
        <i>Mis en place d’une unité de distribution</i> <br>
        <i>Produits alimentaires pour appuyer les gargotières</i> <br>
        <i>Lutte contre les violences faites aux femmes</i> <br>
        <i>Club des amies de Danielle</i> <br>
        <i>GIE Teinture</i> <br>
        <i>Réseau des GIE de Yeumbeul</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'HLM GRAND MÉDINE',
      action: 'Autonomisation',
      params: `
        <b>2020</b> <br>
        <br>
        Microcrédit <br>
        <br>
        <i>Association And Déggo Ligueye</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'PIKINE',
      action: 'Autonomisation',
      params: `
        <b>2010</b> <br>
        <br>
        Microcrédit <br>
        <br>
        <i>Association des Jeunes Dames <br>
        pour la paix et la solidarité</i> <br>
        <i>Pikine khourou Naar</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'POTOU / THIEP',
      action: 'Autonomisation',
      params: `
        <b>2012 - 2014</b> <br>
        Microcrédit <br>
        <br>
        <i>Femmes maraichères - Potou</i> <br>
        <i>Association de femmes maraîchères</i> - Thiep
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'THIES',
      action: '(Appui) Retour des émigrés de Thiès',
      params: `
        <b>2010</b> <br>
        Microcrédit <br>
        Achat de taxis <br>
        Achat de matériel d’animation musicale <br>
        Subvention périodique <br>
        <br>
        <i>Émigrés de retour</i> <br>
        <i>Association des femmes de Mbour3</i>
      ` 
    },
    {
      class_name: 'groupement',
      link: "assets/photo-association.png",
      title: 'PODOR / DAHRA DJOLOFF',
      action: 'Autonomisation Encadrement technique',
      params: `
        <b>2015</b> <br>
        <br>
        Microcrédit <br>
        Appui technique dans le cadre du développement de la filière des équidés <br>
        <br>
        <i>Association les amies de Elleinad</i> <br>
        <i>Sos-Equidés</i>
      ` 
    }
  ]



  associations: string = "Activités"
  displayedText: string = ''
  private currentIndex = 0

  ngOnInit(): void {
    this.startLoop()
  }

  startLoop(): void {
    this.displayedText = ''
    this.currentIndex = 0

    const interval = setInterval(() => {
      if (this.currentIndex < this.associations.length) {
        this.displayedText += this.associations[this.currentIndex]
        this.currentIndex++
      } else {
        clearInterval(interval)

        // Attente 30s, puis recommence la boucle
        setTimeout(() => {
          this.startLoop()
        }, 20000);
      }
    }, 100); // délai entre lettres (modifiable)
  }
  
  scrollToAssociation(): void {
    const target = document.getElementById('associations')
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY
      const offset = 215

      window.scrollTo({
        top: top - offset,
        behavior: 'smooth',
      });
    }
  }

  ngAfterViewInit(): void {
    const targetId = history.state?.scrollToId;

    if (targetId) {
      // on attend un peu pour que le DOM soit prêt (si async content)
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 215; // idem ici
          const top = element.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top,
            behavior: 'smooth'
          });
        }
      }, 10);
    }
  }

}

