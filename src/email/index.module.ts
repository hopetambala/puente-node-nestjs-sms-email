import { Module } from '@nestjs/common';
import { EmailService } from './service/email.service';
import { SignupController } from './signup.controller';
import { ResetController } from './reset.controller';


@Module({
  controllers: [SignupController, ResetController],
  providers: [EmailService]
})
export class EmailModule {}
