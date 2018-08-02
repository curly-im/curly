import conversationsReducer from './conversations';

test('conversations reducer', () => {
  it('should return the initial state', () => {
    const initialState = conversationsReducer(undefined, {});

    expect(typeof initialState).toBe('object');
    expect(typeof initialState.current).toBe('object');
    expect(Array.isArray(initialState.all)).toBe(true);

    expect(Object.keys(initialState.current).length).toBe(0);
    expect(initialState.all.length).toBe(0);
  });
});