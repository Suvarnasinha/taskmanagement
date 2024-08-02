import { Test, TestingModule } from '@nestjs/testing';
import { TypeoftaskController } from './typeoftask.controller';

describe('TypeoftaskController', () => {
  let controller: TypeoftaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeoftaskController],
    }).compile();

    controller = module.get<TypeoftaskController>(TypeoftaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
