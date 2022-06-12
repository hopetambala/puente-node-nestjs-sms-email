import { Injectable } from '@nestjs/common';
import { TWILIO } from 'vendors/twilio';
import { RestCall } from '../../dto/rest-call';

@Injectable()
export default class TextService {
  twilio: any;

  constructor() {
    this.twilio = TWILIO()(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }

  create(data: RestCall) {
    const { textBody: body, textTo: to } = data;

    const message = {
      from: '+16505905090',
      to,
      body,
    };

    return this.twilio.messages.create(message);
  }

  findAll() {
    return `This action returns all text signup`;
  }
}
