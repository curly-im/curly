Nginx
=====

Nginx configuration for local development

Requirements
------------

- installed nginx
- thise line added to `/etc/hosts`: `127.0.0.1       curly.test auth.curly.test signalling.curly.test`
- generated certificates for localhost (see Self-signed Certificates)

Running
-------

`[sudo] ./start.sh`

Self-signed Certificates
-----------------------

In this (nginx) directory:
- `mkdir certs`
- `cd $_`
- `openssl req -x509 -newkey rsa:4096 -keyout privkey.pem -out fullchain.pem -days 365 -nodes`
