import { axios } from '../config/AxiosConfig';

enum CardType {
    EXPENSE = 'EXPENSE',
    ACCOUNTABILITY_SUBMITTED = 'ACCOUNTABILITY_SUBMITTED',
    EVALUATION = 'EVALUATION',
    ACCOUNTABILITY_CREATED = 'ACCOUNTABILITY_CREATED'
}

export const getTimelineInfo = async () => {
    const { data } = await axios.get('/timeline');
    let response;

    if (data) {
        response = data.content.map((value: any) => {
            const { type, expenseTypeIcon }: any = handleTypeCard(value.cardType);
            value.cardType = type;
            value.expenseTypeIcon = expenseTypeIcon ? expenseTypeIcon : value.expenseTypeIcon;
            return value;
        })
    }
    return response;
}

const handleTypeCard = (value: string) => {
    switch (value) {
        case CardType.ACCOUNTABILITY_CREATED:
            return {
                type: 'Depesas criadas',
                expenseTypeIcon: 'check-created'
            };
        case CardType.ACCOUNTABILITY_SUBMITTED:
            return {
                type: 'Transferência de valor para o(a) Trooper',
                expenseTypeIcon: 'check-submitted',
            };
        case CardType.EXPENSE:
            return { type: 'Despesa' }
        case CardType.EVALUATION:
            return {
                type: 'Aprovação em Andamento',
                expenseTypeIcon: 'diaspora'
            }
    }
}