import { Module } from '@nestjs/common';
import EmailService from './service/email/email.service';
import SignupController from './index.controller';
import TextService from './service/text/text.service';

@Module({
  imports: [],
  controllers: [SignupController],
  providers: [EmailService, TextService],
})
export default class SignupModule {}
