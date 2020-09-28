export enum CardType {
    FOOD = 'utensils',
    HOTEL = 'concierge-bell',
    CREATED = 'check-created',
    SUBMMITED = 'check-submitted',
    EVALUATING = 'diaspora',
}

export interface Props {
    type: string;
    date: number;
}

export interface ContainerIconProps {
    color: string;
    bg?: string;
}