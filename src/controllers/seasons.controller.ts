import { SeasonsService } from '@/services/seasons.service';
import { Controller } from '@nestjs/common';

@Controller('seasons')
export class SeasonsController {
  constructor(private seasonsService: SeasonsService) {}

  // TODO
}
