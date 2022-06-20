import { Module } from '@nestjs/common';
import EmailService from './service/index.service';
import EmailController from './index.controller';

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [EmailService],
})
export default class EmailModule {}
