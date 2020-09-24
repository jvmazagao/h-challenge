import {axios} from '../config/AxiosConfig';

enum HeaderPurpose {
    FRATERNIZATION = 'FRATERNIZATION'
}

enum HeaderType {
    REFUND = 'REFUND',
}

export const getHeaderInfo = async () => {
    //todo create api model for this example for more type safety
    const {data} = await axios.get('/header')
    data.purpose = handlePurposeEnum(data.purpose)
    data.type = handleTypeEnum(data.type);
    data.accountabilityExtraInfo.budgetForBreakfast = handleBreakfast(data.accountabilityExtraInfo.budgetForBreakfast);
    return {
        ...data
    }

}

const handlePurposeEnum = (value: string) => {
    switch (value) {
        case HeaderPurpose.FRATERNIZATION:
            return 'Confraternização'; 
    }
}

const handleTypeEnum = (value: string) => {
    switch (value) {
        case HeaderType.REFUND:
            return 'Reembolso';
    }
}

const handleBreakfast = (value: string) => {
 return value === null ? 'Não' : value;   
}