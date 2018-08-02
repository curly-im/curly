const dev = {
    githubClientId: ''
};

const prod = {};

export default {
    ...(process.env.NODE_ENV === 'development' ? dev : prod)
};
