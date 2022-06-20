import { Module } from '@nestjs/common';
import TextController from './index.controller';
import TextService from './service/text.service';

@Module({
  imports: [],
  controllers: [TextController],
  providers: [TextService],
})
export default class TextModule {}
