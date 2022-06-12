import { Injectable } from '@nestjs/common';
import { Message } from '../../dto/email-message';
import { MAILCHIMP } from 'vendors/mailchimp';

@Injectable()
export class EmailService {
  create(message: Message) {
    const mailchimp = MAILCHIMP()(process.env.MAILCHIMP_API_KEY)
    
    return mailchimp.messages.send({
      message
    });
  }

  findAll() {
    return `This action returns all email`;
  }
}
