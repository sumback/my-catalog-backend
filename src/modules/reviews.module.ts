import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ReviewsController } from '@/controllers/reviews.controller';
import { ReviewsService } from '@/services/reviews.service';

@Module({
  controllers: [ReviewsController],
  imports: [HttpModule],
  providers: [ReviewsService],
  exports: [ReviewsService],
})
export class RevewsModule {}
