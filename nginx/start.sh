#!/bin/bash

if ! command -v nginx; then
    echo "Nginx is required, but not installed"
    exit 1
fi

nginx -c $PWD/nginx.conf
