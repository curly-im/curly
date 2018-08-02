const Config = require('config').get('twilio');

const log = require('./log')('turn');

const accountSid = Config.accountSid;
const authToken = Config.authToken;

const client = require('twilio')(accountSid, authToken);

async function createToken() {
    const token = await client.api.accounts(accountSid).tokens
              .create({});

    log.info('Created TURN token', token.iceServers.map(({ url }) => url));
    return token;
}

module.exports = {
    createToken
};
