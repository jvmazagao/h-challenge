import {getSidebarValues} from '../SidebarApi';
import {SidebarValue} from '../../../testHelper/__mocks__/SidebarMock'
jest.setTimeout(30000);

describe('Unit test header api', () => {
    
    it('Test api returned value', async () => {
        getSidebarValues.prototype = jest.fn().mockResolvedValue(() => SidebarValue);
        const response = await getSidebarValues(); 
        expect(response).toBeTruthy();
    });    
})