import { onMessage } from './signalling_server';

test('SignallingServer', () => {
    it('handles messages', () => {
        const expected = {
            action: 'test-action',
            message: 'Test'
        };
        onMessage((action, message) => {
            expect(action).toEqual(expected.action);
            expect(message).toEqual(expected.message);
        })(JSON.stringify(expected));
    });
});
