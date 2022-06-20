import { Controller, Get, Post, Body } from '@nestjs/common';
import TextService from './service/text.service';
import { RestCall } from './dto/rest-call';

@Controller('text')
export default class TextController {
  constructor(private readonly textService: TextService) {}

  @Post()
  create(@Body() data: RestCall) {
    return this.textService.create(data).catch((e: any) => `INVALID${e}`);
  }

  @Get()
  static findAll() {
    return TextService.findAll();
  }
}
