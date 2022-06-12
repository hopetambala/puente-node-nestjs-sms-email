import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AppController from './app.controller';
import AppService from './app.service';
import SignupModule from './signup/index.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SignupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
