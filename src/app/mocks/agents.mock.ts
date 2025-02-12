import { Agent } from '../models/agent.model';

export const AGENTS_MOCK: Agent[] = [
    { id: 1, name: 'Agent X', birthdayDate: '25/08/1998', email: 'agentX@secret.fr', phone: '06 12 34 56 78', address: '1 rue de la défaite', city: 'Paris', postalCode: '75000', country: 'France', photo: 'photo1.jpg', holidaysStartDate: '2025-02-13', holidaysEndDate: '2025-02-19'},
    { id: 2, name: 'Agent Y', birthdayDate: '12/09/1972', email: 'agentY@secret.fr', phone: '06 12 34 56 79', address: '2 rue de la N2', city: 'Bordeaux', postalCode: '33000', country: 'France', photo: 'photo2.jpg', holidaysStartDate: '2025-02-24', holidaysEndDate: '2025-03-02'},
    { id: 3, name: 'Agent Z', birthdayDate: '01/01/1993', email: 'agentZ@secret.fr', phone: '06 12 34 56 80', address: '3 rue du victoire', city: 'Marseille', postalCode: '13000', country: 'France', photo: 'photo3.jpg', holidaysStartDate: '2025-03-10', holidaysEndDate: '2025-03-16'},
];