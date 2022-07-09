# Welcome to PAWs

### A full-stack social app that matches and links the dogs for walks and play-dates. Matches are made based on detailed dog profiles and geographical location.

## Start the Database Server

``` npm start ```

## After the server is running, browse data:
```localhost:8001/api```
```localhost:8001/api/dogs```
```localhost:8001/api/owners```

## Database setup

1. In the 'express-server' folder type in ```psql```.
2. Create new database:
 ``` CREATE DATABASE paws; ```
3. Enter it with the command:
 ``` \c paws; ```
4. Add the dt schema: 
 ``` \i src/db/schema/01_schema.sql; ```
5. Populate dt with: 
 ``` \i src/db/seeds/01_seeds.sql; ```

To view the contents, run: 
``` SELECT * FROM owners; ```
``` SELECT * FROM dogs; ```

If need to reset dt, run: 
``` \i src/db/schema/01_schema.sql; ```

To delete dt and start over: 
``` psql ```
``` DROP DATABASE IF EXISTS paws; ```