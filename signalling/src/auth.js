const request = require('request-promise-native');
const log = require('./log')('signalling-auth');

async function verify(authObject) {
    const failedResult = () => {
        return { verified: false };
    };
    const successfulResult = (userData) => {
        return { verified: true, userData };
    };

    if (!authObject) return failedResult();

    const { type, token, userId } = authObject;

    try {
        // TODO: remove port from code
        const validation = await request.post(
            `http://auth/auth/verify`,
            {
                json: true,
                body: authObject
            }
        );

        if (validation) {
            return successfulResult(validation.userData);
        }

        return failedResult();
    } catch (e) {
        log.error('Error validating user', e);
        return failedResult();
    }
}

module.exports = {
    verify
};
