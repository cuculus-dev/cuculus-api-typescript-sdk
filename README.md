# cuculus-api-typescript-sdk

## Install openapi-generator-cli
```shell
npm install -g @openapitools/openapi-generator-cli
```

### Generate src
```shell
openapi-generator-cli generate -i ./docs/cuculus-openapi.yaml -g typescript-fetch -o ./src -c ./config.json
```
