# React #

react template built on webpack4.

## required environment ##

- Node.js

## install package ##

```bash
npm install
```

## local dev ##

```bash
npm run dev
npm run serve
```

## project structure ##

``` js
    .
    ├── build                     # webpack
    │   ├── webpack.config.js         # base config
    │   ├── webpack.config.dev.js     # dev config
    │   ├── webpack.config.yufa.js    # yufa config
    │   ├── webpack.config.prod.js    # prod config
    ├── dist                    # build directory
    ├── src
    │   ├── api                   # requests
    │   ├── assets                # static
    │   │   ├── img
    │   ├── public                # entry html
    │   ├── router                # routes config
    │   ├── services              # services
    │   ├── styles                # styles
    │   ├── components            # components
    │   ├── utils                 # utils
    │   ├── views                 # pages
    │   ├── main.js               # entry file
    ├── .babelrc                  # babel config
    ├── .browserslistrc           # browser compatibility config
    ├── postcss.config.js         # css config
```

## development env ##

```bash
npm run build:yufa
```

## production env ##

```bash
npm run build
npm run build:prod
```
