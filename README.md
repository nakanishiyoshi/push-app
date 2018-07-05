# dmm-promotion-front

## Spec

* web server - [Koa.js](https://github.com/koajs/koa)
* SSR - [next.js](https://github.com/zeit/next.js/)
* virtual dom - [react](https://github.com/facebook/react)
* flux design pattern - [redux](https://github.com/reactjs/redux)
* ES6 - [babel](https://github.com/babel/babel)
* HOC - [recompose](https://github.com/acdlite/recompose)
* linter - [eslint](https://github.com/eslint/eslint)
* formatter - [prettier](https://github.com/prettier/prettier)

## Development

### Require environment

`node.js v8.9.4(stable) or higher version`

### Install & Build

```
$ npm install
$ npm run dev

> Ready on http;//localhost:3000
```

### Test

```
$ npm test (-- options)
```

## Previous

* [ ] Deploy environment
  * docker
  * AWS - ECS
* [ ] Deplay method
  * circle-ci
* [x] Test unit
  * Testing framework & assetion: [jest](https://github.com/facebook/jest)
  * React components test: [enzyme](https://github.com/airbnb/enzyme)
  * Redux(redux-saga) integration & unit test: [redux-saga-test-plan](https://github.com/jfairbank/redux-saga-test-plan)
* [ ] Type assignment
  * flow-type
