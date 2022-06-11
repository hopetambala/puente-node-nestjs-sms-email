import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailService } from './service/email.service';
import { Message } from './dto/message';

@Controller('signup')
export class SignupController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  create(@Body() createEmailDto: Message) {
    return this.emailService.create(createEmailDto);
  }

  @Get()
  findAll() {
    return this.emailService.findAll();
  }
}
