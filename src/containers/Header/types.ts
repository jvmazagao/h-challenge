

interface Accountability {
    amountOfPeople: number;
    quantity: number;
    eventDate: number;
    budgetForBreakfast: string;
}

interface Project {
    title: string
}

interface Collaborator {
    name: string;
    email: string;
}

interface Reviser {
    name: string,
}
interface CostCenters {
    percentage: number;
    name: string;
    reviser: Reviser;
}

//todo static typing in propss
export interface HeaderValues {
    id: number,
    type: string;
    purpose: string;
    title: string;
    createdOn: number;
    collaborator: Collaborator;
    project: Project;
    accountabilityExtraInfo: Accountability; 
    costCenters: Array<CostCenters>;
    justification: string;
}