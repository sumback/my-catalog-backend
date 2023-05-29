import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { SeasonsController } from '@/controllers/seasons.controller';
import { SeasonsService } from '@/services/seasons.service';

@Module({
  controllers: [SeasonsController],
  imports: [HttpModule],
  providers: [SeasonsService],
  exports: [SeasonsService],
})
export class SeasonsModule {}
