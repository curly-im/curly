function getInitialState() {
    return new Map();
}

export default function messages(state=getInitialState(), action) {
    if (action.type === 'MESSAGE') {
        //FIXME: use conversation id instead of sender's id
        const earlierMessages = state.get(action.sender);

        if (!earlierMessages) {
            return new Map([
                ...state,
                [ action.sender, [ action.message ] ]
            ]);
        }

        const otherMessages = [...state].filter(([ sender ]) => sender !== action.sender);

        return new Map([
            ...otherMessages,
            [ action.sender, [
                ...earlierMessages,
                action.message
            ] ]
        ]);
    }

    return state;
}
