import { changeTextToEmoji } from './MessageInput';

test('Message Input', () => {
    it('should support Emoji', () => {
        const rawString = ':)';

        const emoji = changeTextToEmoji(rawString);

        expect(emoji).toBe('🙂');
    });
});
