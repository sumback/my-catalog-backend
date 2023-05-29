import { MangaService } from '@/services/manga.service';
import { Controller } from '@nestjs/common';

@Controller('manga')
export class MangaController {
  constructor(private mangaService: MangaService) {}

  // TODO
}
