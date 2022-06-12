import { Module } from '@nestjs/common';
import { EmailService } from './service/email/email.service';
import { TextService } from './service/text/text.service';
import { SignupController } from './index.controller';

@Module({
  imports: [],
  controllers: [SignupController],
  providers: [EmailService, TextService],
})
export class SignupModule {}
