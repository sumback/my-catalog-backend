import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { MangaController } from '@/controllers/manga.controller';
import { MangaService } from '@/services/manga.service';

@Module({
  controllers: [MangaController],
  imports: [HttpModule],
  providers: [MangaService],
  exports: [MangaService],
})
export class MangaModule {}
