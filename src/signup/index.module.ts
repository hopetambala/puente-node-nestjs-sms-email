import { Module } from '@nestjs/common';
import { EmailService } from './service/email/email.service';
import { SignupController } from './index.controller';

@Module({
  imports: [],
  controllers: [SignupController],
  providers: [EmailService],
})
export class SignupModule {}
