import { Test, TestingModule } from '@nestjs/testing';
import { TextService } from './text.service';

describe('EmailService', () => {
  let service: TextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextService],
    }).compile();

    service = module.get<TextService>(TextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
