# serverless-tutorial-project-typescript

# How to deploy:

    * npm i
    * npm i -g serverless
    * serverless config credentials --provider aws --key YOUR_AWS_KEY --secret YOUR_AWS_SECRET --profile serverlessUser
    * sls deploy

# Create new project:

    * npm i -g serverless
    * serverless config credentials --provider aws --key YOUR_AWS_KEY --secret YOUR_AWS_SECRET --profile serverlessUser
    * serverless create --template aws-nodejs-typescript --path serverless-tutorial-project-typescript

## endpoints:

- POST - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/hello

```bash
curl --location --request POST 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/hello' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "test"
    }'
```

- GET - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/cityinfo/{city}

```bash
curl --location --request GET 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/cityinfo/Harborville'
```
