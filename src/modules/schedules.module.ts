import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { SchedulesController } from '@/controllers/schedules.controller';
import { SchedulesService } from '@/services/schedules.service';

@Module({
  controllers: [SchedulesController],
  imports: [HttpModule],
  providers: [SchedulesService],
  exports: [SchedulesService],
})
export class SchedulesModule {}
