import { AnimeService } from '@/services/anime.service';
import { Controller } from '@nestjs/common';

@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  // TODO
}
