import { Injectable } from '@nestjs/common';
import { MAILCHIMP } from 'vendors/mailchimp';
import { RestCall } from '../dto/rest-call';

@Injectable()
export default class EmailService {
  mailchimp: any;

  constructor() {
    this.mailchimp = MAILCHIMP()(process.env.MAILCHIMP_API_KEY);
  }

  create(data: RestCall) {
    /**
     * This is too tightly coupled, but let's just get this show on the road
     */
    const { emailsToSendTo, objectId:userId, userFullName } = data;
    const to = emailsToSendTo.map((email: any) => ({
      email,
      type: 'to',
    }));

    const message = {
      from_email: 'tech@puente-dr.org',
      to,
      global_merge_vars: [
        {
          "name": "objectId",
          "content": userId
        },
        {
          "name": "full_name",
          "content": userFullName
        }
      ]
    };

    return this.mailchimp.messages.sendTemplate({
      template_name: "acela-signup-verification",
      template_content: [{}],
      message
    });
  
  }

  static findAll = () => 'This action returns all email';
}
