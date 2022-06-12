import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  hello: string;

  getHello(): string {
    this.hello = 'Hello World!';
    return this.hello;
  }
}
