# todo-list-server

## How to dev

### Setup

```bash
# ... Setup node and yarn
$ git clone git@github.com:kobakazu0429/todo-list-server.git
$ cd todo-list-server
$ yarn install
$ cp .env.sample .env
```

### Commands

```bash
# written in package.json
$ yarn dev   # Start server env:dev
$ yarn start # Start server env:prod
$ yarn lint  # Check type, syntax and auto fix
```

### Environment

```bash
# in .env file
# if development, logging
ENV=dev

# if production, strong-error-handler enabled
ENV=prod
```
