import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AppController from './app.controller';
import AppService from './app.service';
import EmailModule from './email/index.module';
import TextModule from './text/index.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), EmailModule, TextModule],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
