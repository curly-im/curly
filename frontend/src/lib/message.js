export const messageTypes = {
    text: Symbol('message/text')
};

function validateType(type) {
    if (Object.values(messageTypes).includes(type)) return true;

    return false;
}

export function create(type, content) {
    const messageValid = validateType(type);

    if (!messageValid) throw new Error('Unsupported message type');

    return {
        type,
        content
    };
}

export default {
    create
};
