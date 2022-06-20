import { Controller, Get, Post, Body } from '@nestjs/common';
import EmailService from './service/index.service';
import { RestCall } from './dto/rest-call';

@Controller('email')
export default class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  create(@Body() data: RestCall) {
    return this.emailService.create(data).catch((e: any) => `INVALID${e}`);
  }

  @Get()
  static findAll() {
    return EmailService.findAll();
  }
}
