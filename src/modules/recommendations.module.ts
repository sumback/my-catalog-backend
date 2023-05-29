import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { RecommendationsController } from '@/controllers/recommendations.controller';
import { RecommendationsService } from '@/services/recommendations.service';

@Module({
  controllers: [RecommendationsController],
  imports: [HttpModule],
  providers: [RecommendationsService],
  exports: [RecommendationsService],
})
export class RecommendationsModule {}
