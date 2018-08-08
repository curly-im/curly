import { changeTextToEmoji } from './MessageInput';

test('Message Input', () => {
    it('should support Emoji', () => {
        
        expect(changeTextToEmoji(':)')).toBe('🙂');
        expect(changeTextToEmoji(':D')).toBe('😁');
        expect(changeTextToEmoji(';)')).toBe('😉');
        expect(changeTextToEmoji(':|')).toBe('😐');
        expect(changeTextToEmoji(':P')).toBe('😛');
        expect(changeTextToEmoji('8-)')).toBe('😎');
        expect(changeTextToEmoji(':(')).toBe('😞');
    });
});
