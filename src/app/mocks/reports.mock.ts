import { Report } from '../models/report.model';

export const REPORTS_MOCK: Report[] = [
    { id: 1, date: '2025-02-03', title: 'Infiltration réussie', body: 'L’agent a réussi à infiltrer la base ennemie sans être détecté.', agentId: 1, missionId: 11 },
    { id: 2, date: '2025-02-05', title: 'Mission réussie', body: 'L’agent a complété la mission sans incident.', agentId: 1, missionId: 11 },
    { id: 3, date: '2025-02-10', title: 'Documents récupérés', body: 'L’agent a récupéré les documents sensibles de l’ennemi.', agentId: 1, missionId: 11 },
    { id: 4, date: '2025-02-11', title: 'Opération réussie', body: 'L’agent a terminé l’opération avec succès.', agentId: 1, missionId: 11 },
    
    { id: 5, date: '2025-02-01', title: 'Récupération de documents', body: 'L’agent a récupéré des documents classifiés et les a envoyés.', agentId: 2, missionId: 11 },
    { id: 6, date: '2025-02-03', title: 'Mission accomplie', body: 'L’agent a complété la mission en toute sécurité.', agentId: 2, missionId: 11 },
    { id: 7, date: '2025-02-06', title: 'Extraction réussie', body: 'L’agent a extrait un informateur important avec succès.', agentId: 2, missionId: 11 },
    { id: 8, date: '2025-02-07', title: 'Surveillance en cours', body: 'L’agent continue la surveillance stratégique dans la zone de mission.', agentId: 2, missionId: 11 },
    { id: 9, date: '2025-02-08', title: 'Retrait stratégique', body: 'L’agent a retiré des informations importantes avant de quitter la zone avec succès.', agentId: 2, missionId: 11 },
    { id: 10, date: '2025-02-11', title: 'Extraction réussie', body: 'L’agent a extrait une cible clé du territoire ennemi.', agentId: 2, missionId: 11 },
    { id: 11, date: '2025-02-12', title: 'Enquête terminée', body: 'L’agent a mené à bien l’enquête et a réuni les informations nécessaires.', agentId: 2, missionId: 11 },
    
    { id: 12, date: '2025-02-02', title: 'Observation de terrain', body: 'L’agent a observé les mouvements ennemis pendant toute la journée.', agentId: 3, missionId: 11 },
    { id: 13, date: '2025-02-04', title: 'Rapport de surveillance', body: 'L’agent a transmis un rapport sur la situation sur le terrain.', agentId: 3, missionId: 11 },
    { id: 14, date: '2025-02-07', title: 'Contact avec l’ennemi', body: 'L’agent a signalé un contact direct avec l’ennemi mais est resté hors de vue.', agentId: 3, missionId: 11 },
    { id: 15, date: '2025-02-08', title: 'Observation prolongée', body: 'L’agent a prolongé l’observation en raison de l’importance de l’information à récolter.', agentId: 3, missionId: 11 },
    { id: 16, date: '2025-02-09', title: 'Mission accomplie', body: 'L’agent a réussi à collecter toutes les données nécessaires.', agentId: 3, missionId: 11 },
    { id: 17, date: '2025-02-10', title: 'Surveillance réussie', body: 'L’agent a surveillé un objectif clé sans être repéré.', agentId: 3, missionId: 11 },
    { id: 18, date: '2025-02-12', title: 'Alerte donnée', body: 'L’agent a donné une alerte concernant un mouvement suspect.', agentId: 3, missionId: 11 },
];