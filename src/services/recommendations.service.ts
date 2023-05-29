import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Recommendations Service**
 *
 * Service used to access the Recommendations Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/recommendations)
 */
@Injectable()
export class RecommendationsService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
