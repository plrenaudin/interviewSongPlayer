# Song library test

## Intro

This repo is for the song library interview test.

To run it, use the start command:

```
npm start
```

The server will be running on http://localhost:3000

The `Song` API endpoint is located under `/songs`.

## CRUD endpoints

| action | url    | method | payload/parameters    | example                       | implemented |
| ------ | ------ | ------ | --------------------- | ----------------------------- | ----------- |
| list   | `/`    | get    | `{perPage=10,page=1}` | http://localhost:3000/songs/  | [x]         |
| find   | `/:id` | get    | none                  | http://localhost:3000/songs/3 | []          |
| edit   | `/:id` | put    | song metadata         | http://localhost:3000/songs/3 | []          |
| add    | `/`    | post   | song metadata         | http://localhost:3000/songs/  | []          |

## Improvements

- Implement a real database instead of generating dummy data
- Add unit tests
- Add edge case scenarios
- Add comments and JSDoc

## DX improvement

- Add prettier and githooks to format / run unit tests on commit
- Add VSCode (or other IDE) config to run/debug in IDE
- Add eslint and prettier-eslint for code linting / autofixing