import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ClubsController } from '@/controllers/clubs.controller';
import { ClubsService } from '@/services/clubs.service';

@Module({
  controllers: [ClubsController],
  imports: [HttpModule],
  providers: [ClubsService],
  exports: [ClubsService],
})
export class ClubsModule {}
