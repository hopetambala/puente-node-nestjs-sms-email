import { Test, TestingModule } from '@nestjs/testing';
import EmailService from './service/email/email.service';
import SignupController from './index.controller';

describe('SignupController', () => {
  let controller: SignupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignupController],
      providers: [EmailService],
    }).compile();

    controller = module.get<SignupController>(SignupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
