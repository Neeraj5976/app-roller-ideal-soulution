#!/bin/bash
docker build -t rollers_app .
docker container prune -f
docker run --rm -p 5173:5173 rollers_app
