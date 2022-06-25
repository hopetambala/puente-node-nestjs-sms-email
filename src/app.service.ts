import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  hello: string;

  getHello(): string {
    this.hello = 'Puente Messaging Microservice';
    return this.hello;
  }
}
