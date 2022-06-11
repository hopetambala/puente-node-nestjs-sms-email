import { Injectable } from '@nestjs/common';
import { Message } from '../dto/message';
import { MAILCHIMP } from 'vendors/mailchimp';

@Injectable()
export class EmailService {
  create(message: Message) {
    const mailchimp = MAILCHIMP()
    
    return mailchimp.messages.send({
      message
    });
  }

  findAll() {
    return `This action returns all email`;
  }
}
