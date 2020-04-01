### `build`

Build the static files into the `public` folder, turns lambda functions into a deployable form. 

#### Usage

```sh
$ yarn build
```

### `clean`

Runs `gatsby clean` command.

#### Usage

```sh
yarn clean
```

### `netlify dev`

Starts the netlify dev environment, including the gatsby dev environment.
For more infor check the [Netlify Dev Docs](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)

```sh
netlify dev
```

### `develop` or `start`

Runs the `clean` script and starts the gatsby develop server using the command `gatsby develop`. We recomend using this command when you don't need Netlify specific features

#### Usage

```sh
yarn develop
```
### `test`

Not implmented yet

#### Usage

```sh
yarn test
```

### `format`

Formats code and docs according to our style guidelines using `prettier`

#### Usage

```sh
yarn format
```
