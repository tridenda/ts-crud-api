# ts-crud-api

## Need to Install

- NodeJS
- PostgreSQL

## How to Run

1. Run PostgreSQL using `sudo service postgres start`
2. Create database using `createdb <DATABASE NAME>`
3. Create `.env` file to add db credential

```
POSTGRES_HOST=<HOSTNAME>
POSTGRES_PORT=<PORT>
POSTGRES_USER=<USER>
POSTGRES_PASSWORD=<PASSWORD>
POSTGRES_DB=<DATABASE_NAME>
```

4. Run `yarn install`
5. Run `yarn start-dev`
