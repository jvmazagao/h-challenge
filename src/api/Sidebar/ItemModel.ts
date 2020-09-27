interface Currency {
    id: number;
    name: string;
    code: string;
    symbol: string
}

export interface SidebarItem {
    accountabilityId: number;
    accountabilityStatus: string;
    currency: Currency;
    declared: number;
    approved: number;
    received: number;
    returned: number;
    balance: number;
    updatedOn: number;
}