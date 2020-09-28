import {getTimelineInfo} from '../TimelineApi';
import {Timeline} from '../../../testHelper/__mocks__/TimelineMock';

jest.setTimeout(30000);

describe('Unit test timelineApi', () => {
    it('Return values',async () => {
        getTimelineInfo.prototype = jest.fn().mockResolvedValue(() => Timeline);
        const response = await getTimelineInfo(); 
        expect(response).toBeTruthy();
    })
})