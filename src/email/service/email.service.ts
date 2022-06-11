import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from '../dto/create-email.dto';

@Injectable()
export class EmailService {
  create(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }

  findAll() {
    return `This action returns all email`;
  }
}
