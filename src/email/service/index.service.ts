import { Injectable } from '@nestjs/common';
import { MAILCHIMP } from 'vendors/mailchimp';
import { RestCall } from '../dto/rest-call';
import { EmailFactory } from './rules/factory';

@Injectable()
export default class EmailService {
  mailchimp: any;

  constructor() {
    this.mailchimp = MAILCHIMP()(process.env.MAILCHIMP_API_KEY);
  }

  create(data: RestCall) {
    const { type } = data;
    return EmailFactory.getEmailType(type).sendEmail(this.mailchimp, data);
  }

  static findAll = () => 'This action returns all email';
}
