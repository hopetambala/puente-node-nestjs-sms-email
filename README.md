[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description
  <p align="center">Puente's Email and SMS API built using <a href="http://nodejs.org" target="_blank">Node.js</a> and <a href="https://docs.nestjs.com/" target="_blank">NestJS</a>.</p>
 <p align="center">

## Installation

```bash
$ npm install
```

## Running the app

### Start Commands
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test Commands

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Project Structure

### Modules
The architectural design of NestJS encourages feature modules. This feature-based design groups the functionality of a single feature in one folder, registered in one module. This design simplifies the codebase and makes code-splitting very easy.


#### Email
POST Call Structure to "http://{{ROOT_UTL}}/email
```json
{
    "emailSubject": "Email Subject",
    "objectId":"User's Parse ObjectId",
    "userFullName":"User's Fullname",
    "emailsToSendTo":[
        "usersemail@email.com"
    ],
    "type":"passwordReset"
}
```

### Text
POST Call Structure to "http://{{ROOT_UTL}}/email
```json
{
    "textTo": "1234567",
    "textBody": "Text"
}
```

### Services
Services are classes that handle business logic.
- [Mailchimp](https://mailchimp.com/developer/transactional/)
- [Twilio](https://www.twilio.com/docs/sms/quickstart/node)

## Resources
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.



