import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { RandomController } from '@/controllers/random.controller';
import { RandomService } from '@/services/random.service';

@Module({
  controllers: [RandomController],
  imports: [HttpModule],
  providers: [RandomService],
  exports: [RandomService],
})
export class RandomModule {}
