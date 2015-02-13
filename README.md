# gcloud-node-bigquery-test

![](https://raw.githubusercontent.com/ryota-/gcloud-node-bigquery-test/master/capture.png)

## Usage

Install dependencies:

```bash
$ npm install
```

Start:

```bash
$ npm start
```

## Environment

### `development` (on localhost)

Add a `config.json` file in the `specific` folder.

### `production` (on Heroku)

Set up config vars:

- `BQ_PRIVATE_KEY_ID`
- `BQ_PRIVATE_KEY`
- `BQ_CLIENT_EMAIL`
- `BQ_CLIENT_ID`
- `BQ_TYPE`

## Misc

Use:

- [gcloud-node](https://github.com/GoogleCloudPlatform/gcloud-node)
- [express-generator](https://github.com/expressjs/generator)
