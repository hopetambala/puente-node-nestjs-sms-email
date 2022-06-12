import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResetModule } from './reset/reset.module';
import { SignupModule } from './signup/index.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),SignupModule, ResetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
