import { Test, TestingModule } from '@nestjs/testing';
import { SignupController } from '../signup.controller';
import { EmailService } from '../service/email.service';

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
