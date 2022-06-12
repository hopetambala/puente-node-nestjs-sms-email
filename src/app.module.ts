import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './signup/index.module';
import { ConfigModule } from '@nestjs/config';
import { ResetModule } from './reset/reset.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),EmailModule, ResetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
