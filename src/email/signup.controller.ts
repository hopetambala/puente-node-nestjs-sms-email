import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailService } from './service/email.service';
import { Message, RestPostCall } from './dto/message';

@Controller('signup')
export class SignupController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  create(@Body() data: RestPostCall) {
    const { emailSubject:subject, emailBody:text, emailsToSendTo } = data
    const to = emailsToSendTo.map((email)=>({
        email,
        type:"to"
    }))
    
    return this.emailService.create({
      from_email:"tech@puente-dr.org",
      subject,
      text,
      to}).catch((e: any)=>{
        return `INVALID${e}`
      });
  }

  @Get()
  findAll() {
    return this.emailService.findAll();
  }
}
