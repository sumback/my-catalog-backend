import { CharactersService } from '@/services/characters.service';
import { Controller } from '@nestjs/common';

@Controller('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) {}

  // TODO
}
