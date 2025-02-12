import { Mission } from '../models/mission.model';

export const MISSIONS_MOCK: Mission[] = [
  { 
    id: 1, 
    title: 'Renseignement économique sur une entreprise concurrente', 
    description: `Cette mission consiste à infiltrer une entreprise concurrente pour collecter des informations sur ses pratiques commerciales et ses projets futurs. L'agent devra se faire embaucher sous une fausse identité et collecter des documents confidentiels sans éveiller de soupçons.`,
    color: 'green', 
    startDate: '2024-01-10', 
    endDate: '2024-01-24',
  },
  { 
    id: 2, 
    title: 'Extraction de données sensibles depuis un serveur gouvernemental', 
    description: `L'agent doit pénétrer dans un centre de données gouvernemental pour extraire des fichiers sensibles, qui pourraient compromettre des informations confidentielles liées à la sécurité nationale. La mission nécessite une approche furtive et des compétences avancées en cybersécurité.`,
    color: 'red', 
    startDate: '2024-02-05', 
    endDate: '2024-02-19',
  },
  { 
    id: 3, 
    title: 'Espionnage d’un groupe terroriste dans un pays instable', 
    description: `Dans une région à haut risque, cette mission consiste à infiltrer un groupe terroriste pour obtenir des informations sur leurs opérations et empêcher un attentat imminent. L'agent doit éviter de se faire détecter tout en récoltant des renseignements cruciaux.`,
    color: 'blue', 
    startDate: '2024-03-01', 
    endDate: '2024-03-15',
  },
  { 
    id: 4, 
    title: 'Recuperation de documents top secrets dans une ambassade ennemie', 
    description: `Une mission délicate qui implique de pénétrer dans une ambassade ennemie pour récupérer des documents top secrets liés à la sécurité internationale. L'agent devra contourner un système de sécurité complexe et opérer sous couverture.`,
    color: 'yellow', 
    startDate: '2024-04-01', 
    endDate: '2024-04-14',
  },
  { 
    id: 5, 
    title: 'Analyse de la communication d’un réseau criminel', 
    description: `Cette mission est axée sur l’interception des communications d’un réseau criminel opérant à l’international. L’agent doit utiliser des techniques d’écoute électronique pour recueillir des preuves afin d’aider à démanteler ce réseau.`,
    color: 'purple', 
    startDate: '2024-05-10', 
    endDate: '2024-05-24',
  },
  { 
    id: 6, 
    title: 'Infiltration d’une organisation de trafic d’armes', 
    description: `L'agent doit infiltrer un groupe clandestin de trafic d'armes et récolter des informations sur leurs réseaux et transactions. Cette mission exige une couverture discrète et des contacts à haut risque.`,
    color: 'orange', 
    startDate: '2024-06-01', 
    endDate: '2024-06-15',
  },
  { 
    id: 7, 
    title: 'Discrétion dans la collecte d’informations sur un site industriel militaire', 
    description: `Cette mission consiste à collecter des informations sensibles sur un site industriel à double usage (civil et militaire). L'agent devra infiltrer l'entreprise sans éveiller de soupçons et collecter des documents importants.`,
    color: 'pink', 
    startDate: '2024-07-15', 
    endDate: '2024-07-29',
  },
  { 
    id: 8, 
    title: 'Surveillance d’un diplomate suspect de corruption', 
    description: `Dans le cadre d'une enquête, l'agent doit surveiller un diplomate soupçonné de corruption. Cela implique de suivre ses déplacements, de filmer ses réunions et de récolter des preuves discrètement.`,
    color: 'brown', 
    startDate: '2024-08-10', 
    endDate: '2024-08-24',
  },
  { 
    id: 9, 
    title: 'Sabotage d’un système informatique d’un laboratoire concurrent', 
    description: `Cette mission implique de pénétrer dans un laboratoire concurrent et d'altérer ses systèmes informatiques pour perturber ses recherches. L'agent doit être très discret et éviter toute détection.`,
    color: 'red', 
    startDate: '2024-09-05', 
    endDate: '2024-09-19',
  },
  { 
    id: 10, 
    title: 'Soutien logistique dans une opération militaire secrète', 
    description: `L'agent doit fournir un soutien logistique à une opération militaire secrète en traversant un territoire hostile pour livrer des fournitures essentielles et assurer le bon déroulement de la mission.`,
    color: 'grey', 
    startDate: '2024-10-20', 
    endDate: '2024-11-03',
  },
  {
    id: 11, 
    title: 'Mission de renseignement stratégique dans une zone à haut risque', 
    description: `Cette mission vise à collecter des informations sensibles sur les activités suspectes d'un groupe opérant dans une zone à haut risque. L'agent devra s’infiltrer discrètement en adoptant une fausse identité, établir un réseau de contacts locaux fiables et surveiller les mouvements de certains individus clés.
    
    Il est impératif de maintenir un profil bas, d’éviter tout affrontement direct et d’utiliser des méthodes de communication sécurisées pour transmettre les renseignements collectés. La mission pourrait nécessiter des déplacements nocturnes à travers des terrains difficiles et l’exploitation de techniques avancées de surveillance.
    
    La principale difficulté réside dans le fait que la zone est instable, avec une forte présence d’éléments hostiles et des forces de l’ordre corrompues pouvant compliquer l’opération. L’agent devra donc s’adapter rapidement aux imprévus, gérer ses ressources avec précaution et, si nécessaire, orchestrer une extraction discrète en cas de menace imminente.`,
    color: 'green', 
    startDate: '2025-02-01', 
    endDate: '2025-02-17',
  },
  { 
    id: 12, 
    title: 'Infiltration et collecte de documents sensibles dans un complexe sécurisé', 
    description: `L'objectif de cette mission est d'infiltrer un complexe hautement sécurisé appartenant à une organisation soupçonnée d’activités illégales et de récupérer des documents critiques susceptibles de compromettre ses opérations.
    
    L’agent devra d'abord identifier les failles potentielles du système de sécurité : routines des gardes, accès restreints, caméras de surveillance et protocoles d’urgence. Une phase préparatoire minutieuse sera essentielle, impliquant l’analyse des schémas de circulation, l’obtention de codes d’accès et l’évaluation des risques.
    
    Une fois à l’intérieur, l’agent devra se déplacer rapidement et silencieusement, en évitant d’attirer l’attention. Une erreur ou une alerte déclenchée pourrait compromettre toute la mission et entraîner une escalade de la situation. Une fois les documents extraits, il faudra planifier une évasion efficace sans laisser de traces de l’intrusion. La réussite de cette mission pourrait avoir des implications géopolitiques majeures et influer directement sur les prochaines décisions stratégiques.`,
    color: 'red', 
    startDate:'2025-02-17', 
    endDate: '2025-03-26',
  },
  { 
    id: 13, 
    title: 'Surveillance discrète d’une cible clé sur plusieurs jours', 
    description: `Dans le cadre d’une enquête hautement confidentielle, cette mission consiste à suivre et observer une cible clé sans éveiller ses soupçons. L’agent devra documenter ses mouvements, ses interactions et ses habitudes quotidiennes afin de collecter des preuves et d’anticiper ses intentions.
    
    La mission s’étend sur plusieurs jours et nécessitera de multiples points d’observation, incluant des postes fixes (appartements loués, cafés, bâtiments publics) ainsi que des filatures mobiles (véhicules discrets, transports en commun, déplacements à pied). L’agent devra également maîtriser l’usage de micros directionnels et de caméras miniatures pour capturer des éléments compromettants.
    
    Une attention particulière devra être portée aux interactions de la cible avec d’autres individus, afin d’identifier d’éventuels complices. La patience et la discrétion seront essentielles, car toute erreur pourrait alerter la cible et la pousser à modifier son comportement ou à se cacher. La mission prendra fin dès lors que les informations nécessaires auront été obtenues et validées par l’équipe d’analyse.`,
    color: 'blue', 
    startDate: '2025-03-26', 
    endDate: '2025-05-31',
  }
];
