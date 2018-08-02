const uuidv4 = require('uuid/v4');

const connections = [];

function create({ ws, ip }) {
    const connection = {
        id: uuidv4(),
        ws,
        ip,
        isActive: true
    };

    ws.on('pong', () => connection.isActive = true);

    connections.push(connection);
    return connection;
}

function getAll() {
    return [...connections];
}

function remove(idToRemove) {
    connections.filter(({ id }) => id !== idToRemove);
}

module.exports = {
    create,
    getAll,
    remove
};
