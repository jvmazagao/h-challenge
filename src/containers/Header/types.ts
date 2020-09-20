

interface Accountability {
    quantity: number;
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
    reviser: Reviser;
}

//todo static typing in propss
export interface HeaderValues {
    type: string;
    purpose: string;
    title: string;
    createdOn: number;
    collaborator: Collaborator;
    project: Project;
    accountabilityExtraInfo: Accountability; 
    costCenters: Array<CostCenters>;

}