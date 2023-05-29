import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { TopController } from '@/controllers/top.controller';
import { TopService } from '@/services/top.service';

@Module({
  controllers: [TopController],
  imports: [HttpModule],
  providers: [TopService],
  exports: [TopService],
})
export class TopModule {}
