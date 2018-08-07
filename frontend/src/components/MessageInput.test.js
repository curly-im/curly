import { changeSmile } from './MessageInput';

test('Message Input', () => {
    it('should support Emoji', () => {
        const rawString = ':)';

        const emoji = changeSmile(rawString);

        expect(emoji).toBe('🙂');
    });
});
