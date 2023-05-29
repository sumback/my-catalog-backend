import { ProducersService } from '@/services/producers.service';
import { Controller } from '@nestjs/common';

@Controller('producers')
export class ProducersController {
  constructor(private producersService: ProducersService) {}

  // TODO
}
