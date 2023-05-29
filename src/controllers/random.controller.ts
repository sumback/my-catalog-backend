import { RandomService } from '@/services/random.service';
import { Controller } from '@nestjs/common';

@Controller('random')
export class RandomController {
  constructor(private randomService: RandomService) {}

  // TODO
}
