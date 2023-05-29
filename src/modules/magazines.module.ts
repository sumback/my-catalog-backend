import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { MagazinesController } from '@/controllers/magazines.controller';
import { MagazinesService } from '@/services/magazines.service';

@Module({
  controllers: [MagazinesController],
  imports: [HttpModule],
  providers: [MagazinesService],
  exports: [MagazinesService],
})
export class MagazinesModule {}
