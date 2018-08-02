import iceServersReducer from './ice_servers';

test('ICE Servers reducer', () => {
    it('should return the initial state', () => {
        expect(iceServersReducer(undefined, {})).toEqual([]);
    });

    it('should set server list', () => {
        const expectedList = [ { iceServer: true } ];
        const action = { type: 'SET_ICE_SERVERS', iceServers: expectedList };

        expect(iceServersReducer([], action)).toEqual(expectedList);
    });
});
