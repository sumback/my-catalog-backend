import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ProducersController } from '@/controllers/producers.controller';
import { ProducersService } from '@/services/producers.service';

@Module({
  controllers: [ProducersController],
  imports: [HttpModule],
  providers: [ProducersService],
  exports: [ProducersService],
})
export class ProducersModule {}
