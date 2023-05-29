import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { CharactersController } from '@/controllers/characters.controller';
import { CharactersService } from '@/services/characters.service';

@Module({
  controllers: [CharactersController],
  imports: [HttpModule],
  providers: [CharactersService],
  exports: [CharactersService],
})
export class CharactersModule {}
