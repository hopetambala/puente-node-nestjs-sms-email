import { Test, TestingModule } from '@nestjs/testing';
import TextService from './service/text.service';
import TextController from './index.controller';

describe('TextController', () => {
  let controller: TextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextController],
      providers: [TextService],
    }).compile();

    controller = module.get<TextController>(TextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
