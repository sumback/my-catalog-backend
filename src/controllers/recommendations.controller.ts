import { RecommendationsService } from '@/services/recommendations.service';
import { Controller } from '@nestjs/common';

@Controller('recommendations')
export class RecommendationsController {
  constructor(private recommendationsService: RecommendationsService) {}

  // TODO
}
