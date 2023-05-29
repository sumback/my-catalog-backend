import { ClubsService } from '@/services/clubs.service';
import { Controller } from '@nestjs/common';

@Controller('clubs')
export class ClubsController {
  constructor(private clubsService: ClubsService) {}

  // TODO
}
