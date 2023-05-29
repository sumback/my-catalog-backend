import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Reviews Service**
 *
 * Service used to access the Reviews Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/reviews)
 */
@Injectable()
export class ReviewsService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
