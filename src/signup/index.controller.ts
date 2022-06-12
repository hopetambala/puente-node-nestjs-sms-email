import { Controller, Get, Post, Body } from '@nestjs/common';
import EmailService from './service/email/email.service';
import TextService from './service/text/text.service';
import { RestCall } from './dto/rest-call';

@Controller('signup')
export default class SignupController {
  constructor(
    private readonly emailService: EmailService,
    private readonly textService: TextService,
  ) {}

  @Post()
  create(@Body() data: RestCall) {
    const { type } = data;
    if (type === 'text') {
      return this.textService.create(data);
    }
    return this.emailService.create(data).catch((e: any) => `INVALID${e}`);
  }

  @Get()
  findAll() {
    return this.emailService.findAll();
  }
}
