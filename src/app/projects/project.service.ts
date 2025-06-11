import { Injectable } from '@angular/core';

export interface Project {
  id: string; // Could be a slug or unique name
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  projectUrl: string; // External link to GitHub, etc.
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsData: Project[] = [
    {
      id: 'ubivoit',
      title: 'SAE 1.05 - 1.06 : Ubivoit',
      description: "Site Web fictivement créé pour une entreprise afin de réduire les coûts et l'empreinte carbone des déplacements des employés. Elle regroupe des solutions durables pour les trajets domicile-travail. Il a été fait entièrement en HTML et CSS.",
      imageUrl: 'assets/projets/img_1.05.png',
      altText: 'Ubivoit project image',
      projectUrl: 'https://github.com/NathanMarquis-Pro/Ubivoit'
    },
    {
      id: 'parcoursup',
      title: 'SAE 2.04 : Parcoursup',
      description: "Mise en place d'une base de donnée pour toutes les données de Parcoursup. Ces données sont importés du site officiel de Parcoursup, filtrées puis triées grâce à un script réutilisable en SQL. Elles sont stockées dans une base de donnée Postgres.",
      imageUrl: 'assets/projets/img_2.04.png',
      altText: 'Parcoursup project image',
      projectUrl: 'https://github.com/NathanMarquis-Pro/ParcoursupDatabase'
    },
    {
      id: 'catacombes',
      title: 'SAE 3.01 : Catacombes',
      description: "Jeu-vidéo conçu en utilisant la méthode agile. C'est un rogue-like tour par tour où le personnage principal se trouve dans une pyramide, et doit aller le plus loin possible sans mourir. Il a été réalisé exclusivement en java, et utilise des fichiers CSV pour la persistance des données. Ce projet s'est terminé en trois jours de travail.",
      imageUrl: 'assets/projets/img_3.01.png',
      altText: 'Catacombes project image',
      projectUrl: 'https://github.com/NathanMarquis-Pro/Catacombes'
    },
    {
      id: 'flyingdustries',
      title: 'SAE 2.01 : FlyingDustries',
      description: "FlyingDustries est une application de recherche du meilleur itinéraire parmi une liste de chemins donnés dans des fichiers CSV. Elle a été conçu en Java et utilise JavaFX pour l'interface graphique.",
      imageUrl: 'assets/projets/img_2.01.png',
      altText: 'FlyingDustries project image',
      projectUrl: 'https://github.com/NathanMarquis-Pro/FlyingDustries'
    },
    {
      id: 'kfinds',
      title: 'SAE 3.02 : K_Finds',
      description: "Cette application permet de charger, classer et afficher des données dans un nuage de points. Elle permet également de classifier une nouvelle donnée qu'on ajoute par rapport au jeu de données existant. ELle a été conçu en Java, utilisant JavaFX pour l'IHM.",
      imageUrl: 'assets/projets/img_3.02.png',
      altText: 'K_Finds project image',
      projectUrl: 'https://github.com/NathanMarquis-Pro/K_Finds'
    },
    {
      id: 'universelille',
      title: 'SAE 4.01 : UniVerseLille',
      description: "Ce projet consiste en la conception d'une application de messagerie instantanée pour les étudiants et le personnel de l'Université de Lille. Elle a été développé en Java, avec toutes les dépendances permettant de faire un serveur web (JEE, JSP, JDBC). Le déploiement s'est fait sur un serveur Tomcat, et un serveur PostgresSQL pour la base de donnée.",
      imageUrl: 'assets/projets/img_4.01.png', // Path for the potentially missing image
      altText: "UniVerseLille project image (L'image arrive bientôt)",
      projectUrl: 'https://github.com/NathanMarquis-Pro/UniVerseLille'
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projectsData;
  }
}
