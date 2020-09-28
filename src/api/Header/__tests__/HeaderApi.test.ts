import {getHeaderInfo} from '../HeaderApi';
import {HeaderMock, HeaderMockYes} from '../../../testHelper/__mocks__/HeaderMock';

jest.setTimeout(30000);

describe('Unit test header api', () => {
    it('Test api returned value Não', async () => {
        getHeaderInfo.prototype = jest.fn().mockResolvedValue(() => HeaderMock);
        const response = await getHeaderInfo(); 
        expect(response).toBeTruthy();
        expect(response.purpose).toBe('Confraternização');
        expect(response.accountabilityExtraInfo.budgetForBreakfast).toBe('Não')
    });    
})

