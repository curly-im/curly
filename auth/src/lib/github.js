const request = require('request-promise-native');
const Config = require('config').get('github');

const frontendUrl = process.env.NODE_ENV === 'development' ? 'curly.test ' : 'curly.im';

async function callback(ctx) {
    const { code } = ctx.query;
    const clientId = Config.get('client_id');
    const secret = Config.get('secret');

    if (!code) throw new Error('Github: No code provided');

    const response = await request.post(
        'https://github.com/login/oauth/access_token',
        {
            json: true,
            body: {
                code,
                client_id: clientId,
                client_secret: secret
            }
        }
    );

    const user = await request.get(
        `https://api.github.com/user?access_token=${response.access_token}`,
        {
            json: true,
            headers: { 'User-Agent': 'Syntax.im' }
        }
    );

    ctx.cookies.set('curly-auth', JSON.stringify({
        type: 'github',
        token: response.access_token,
        user: user.id
    }), { httpOnly: false, domain: frontendUrl });
    ctx.redirect(`https://${frontendUrl}`);
}

async function verify(ctx) {
    const { type, token, userId } = ctx.request.body;

    try {
        const user = await request.get(
            `https://api.github.com/user?access_token=${token}`,
            {
                json: true,
                headers: { 'User-Agent': 'Syntax.im' }
            }
        );

        if (user.id === userId) {
            ctx.status = 200;
            ctx.body = { result: 'valid', userData: user };
            return;
        }

        ctx.status = 401;
    } catch (e) {
        ctx.status = 401;
        throw e;
    }
}

module.exports = {
    callback,
    verify
};
