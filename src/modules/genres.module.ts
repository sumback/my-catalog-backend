import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { GenresController } from '@/controllers/genres.controller';
import { GenresService } from '@/services/genres.service';

@Module({
  controllers: [GenresController],
  imports: [HttpModule],
  providers: [GenresService],
  exports: [GenresService],
})
export class GenresModule {}
