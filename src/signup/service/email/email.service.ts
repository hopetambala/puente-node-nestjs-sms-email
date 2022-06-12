import { Injectable } from '@nestjs/common';
import { MAILCHIMP } from 'vendors/mailchimp';
import { Message } from '../../dto/email-message';

@Injectable()
export class EmailService {
  create(message: Message) {
    const mailchimp = MAILCHIMP()(process.env.MAILCHIMP_API_KEY);

    return mailchimp.messages.send({
      message,
    });
  }

  findAll() {
    return `This action returns all email`;
  }
}
