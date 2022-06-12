import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmailService } from './service/email/email.service';
import { Message, RestPostCall } from './dto/email-message';

@Controller('signup')
export class SignupController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  create(@Body() data: RestPostCall) {
    const { emailSubject: subject, emailBody: text, emailsToSendTo } = data;
    const to = emailsToSendTo.map((email) => ({
      email,
      type: 'to',
    }));

    return this.emailService
      .create({
        from_email: 'tech@puente-dr.org',
        subject,
        text,
        to,
      })
      .catch((e: any) => `INVALID${e}`);
  }

  @Get()
  findAll() {
    return this.emailService.findAll();
  }
}
