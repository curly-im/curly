Installing for Development
--------------------------

- install dependecies for `auth`, `signalling` and `frontend`
- copy `auth/config_example` to `auth/config` and fill in values
- copy `signalling/config_example` to `signalling/config` and fill in values
- copy `frontend/src/config_example` to `frontend/src/config` and fill in values
- in `nginx/` directory generate certificates (see `nginx/README.md`)
- install dependencies (`yarn`) for every service
- run `create_network.sh` to create a Docker network for service containers
- run `docker-compose build`

Running in Development Environment
----------------------------------

To run containers, call `docker-compose up`, optionally followed with `-d` flag to detach from terminal.
Next, run frontend dev server: `cd frontend && yarn start`

If running for the first time, you will need to add security exceptions for our self-signed certificates.
Access `https://curly.test` and `https://signalling.curly.test` from browser(s) to add the exxceptions.
