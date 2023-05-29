import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Seasons Service**
 *
 * Service used to access the Seasons Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/seasons)
 */
@Injectable()
export class SeasonsService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
