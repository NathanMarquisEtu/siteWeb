import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  imageUrls: string[]; // Array to accommodate single or multiple images
  altTexts: string[]; // Corresponding alt texts for images
  // category?: string; // Optional: if we decide to categorize them later
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skillsData: Skill[] = [
    {
      name: 'Langage Objet (Java)',
      imageUrls: ['assets/competences/logo_Java.svg'],
      altTexts: ['Java logo']
    },
    {
      name: 'Versioning (Git, GitLab)',
      imageUrls: ['assets/competences/logo_Git.png', 'assets/competences/logo_GitLab.png'],
      altTexts: ['Git logo', 'GitLab logo']
    },
    {
      name: 'Web (HTML, CSS)',
      imageUrls: ['assets/competences/logo_HTML.png', 'assets/competences/logo_CSS.png'],
      altTexts: ['HTML logo', 'CSS logo']
    },
    {
      name: 'Graphique, Prototypage', // JavaFX & Figma
      imageUrls: ['assets/competences/logo_JavaFX.png', 'assets/competences/logo_Figma.png'],
      altTexts: ['JavaFX logo', 'Figma logo']
    },
    {
      name: 'SQL (Postgresql, SQLite)', // SQL & Postgre
      imageUrls: ['assets/competences/logo_SQL.png', 'assets/competences/logo_Postgre.png'],
      altTexts: ['SQL logo', 'PostgreSQL logo']
    },
    {
      name: 'Bas niveau (C)',
      imageUrls: ['assets/competences/logo_C.svg'],
      altTexts: ['C language logo']
    },
    {
      name: 'Suite office', // Office & Office Apps
      imageUrls: ['assets/competences/logo_Office.png', 'assets/competences/logo_Office_Apps.webp'],
      altTexts: ['Microsoft Office logo', 'Office Apps logo']
    },
    {
      name: 'Markdown',
      imageUrls: ['assets/competences/logo_Markdown.png'],
      altTexts: ['Markdown logo']
    }
  ];

  constructor() { }

  getSkills(): Skill[] {
    return this.skillsData;
  }
}
