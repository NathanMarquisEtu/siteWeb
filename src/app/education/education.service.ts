import { Injectable } from '@angular/core';

export interface EducationItem {
  id: string;
  name: string;
  institution: string;
  institutionLogoUrl: string;
  altText: string;
  dates: string; // Could be more structured if needed (e.g., startDate, endDate)
  description: string;
  link: string; // URL to the institution or program
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private educationHistoryData: EducationItem[] = [
    {
      id: 'but_info',
      name: 'BUT Informatique - Parcours A : réalisation d\'applications',
      institution: 'IUT de Lille - Villeneuve-d\'Ascq',
      institutionLogoUrl: 'assets/logo_iut_lille_coupe.png',
      altText: 'Logo IUT de Lille',
      dates: '2023 - 2026',
      description: "Le BUT Informatique parcours A, réalisation d'applications : conception, développement, validation, est principalement axé sur la professionnalisation et il permet d'apprendre les compétences techniques et méthodologiques utiles et nécessaires à un développeur.",
      link: 'https://www.univ-lille.fr/formations/fr-00082372'
    },
    {
      id: 'bac_sti2d',
      name: 'Baccalauréat technologique STI2D en spécialisation SIN : mention TB',
      institution: 'Lycée Elisa Lemonnier - Douai',
      institutionLogoUrl: 'assets/logo_Elisa_Lemonnier.png',
      altText: 'Logo Lycée Elisa Lemonnier',
      dates: '2020 - 2023',
      description: "Le Baccalauréat technologique STI2D (sciences et technologies de l'industrie et du développement durable) est construit autour de l'innovation technologique, des sciences et de l'information. La spécialisation SIN apporte les compétences nécessaires pour développer des solutions intégrées et mesurer leurs performances environnementales.",
      link: 'https://www.lycee-elisalemonnier.fr/site/nos-formations/'
    }
  ];

  constructor() { }

  getEducationHistory(): EducationItem[] {
    return this.educationHistoryData;
  }
}
