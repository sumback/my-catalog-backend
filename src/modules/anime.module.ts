import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AnimeController } from '@/controllers/anime.controller';
import { AnimeService } from '@/services/anime.service';

@Module({
  controllers: [AnimeController],
  imports: [HttpModule],
  providers: [AnimeService],
  exports: [AnimeService],
})
export class AnimeModule {}
