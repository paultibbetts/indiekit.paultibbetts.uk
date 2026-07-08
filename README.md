# indiekit.paultibbetts.uk

My [IndieKit](https://getindiekit.com/) setup.

## Docker Compose

An example Docker Compose setup is:

```
name: indiekit
services:
  indiekit:
    build: .
    restart: always
    ports:
      - ${HTTP_PORT:-3000}:3000
    environment:
      - MONGO_URL=mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@mongo
      - PASSWORD_SECRET
      - SECRET
      - GITHUB_TOKEN
  mongo:
    image: mongo:4
    restart: always
    volumes:
      - mongo:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME
      - MONGO_INITDB_ROOT_PASSWORD
volumes:
  mongo: {}
```
