import { Test, TestingModule } from '@nestjs/testing';
import { TypeoftaskService } from './typeoftask.service';

describe('TypeoftaskService', () => {
  let service: TypeoftaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeoftaskService],
    }).compile();

    service = module.get<TypeoftaskService>(TypeoftaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
