import { Injectable } from '@nestjs/common';
import { MAILCHIMP } from 'vendors/mailchimp';
import { RestCall } from '../../dto/rest-call';

@Injectable()
export default class EmailService {
  mailchimp: any;

  constructor() {
    this.mailchimp = MAILCHIMP()(process.env.MAILCHIMP_API_KEY);
  }

  create(data: RestCall) {
    const { emailSubject: subject, emailBody: text, emailsToSendTo } = data;
    const to = emailsToSendTo.map((email: any) => ({
      email,
      type: 'to',
    }));

    const message = {
      from_email: 'tech@puente-dr.org',
      subject,
      text,
      to,
    };

    return this.mailchimp.messages.send({
      message,
    });
  }

  findAll() {
    return `This action returns all email signup`;
  }
}
