import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { WatchController } from '@/controllers/watch.controller';
import { WatchService } from '@/services/watch.service';

@Module({
  controllers: [WatchController],
  imports: [HttpModule],
  providers: [WatchService],
  exports: [WatchService],
})
export class WatchModule {}
