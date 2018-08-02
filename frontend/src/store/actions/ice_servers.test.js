import { setIceServers } from './index';

test('iceServer actions', () => {
    it('setIceServers should set server list', () => {
        const expectedAction = {
            type: 'SET_CONTACTS',
            iceServers: [ { iceServer: true } ]
        };

        expect(setIceServers(expectedAction.iceServers).toEqual(expectedAction));
    });
});
