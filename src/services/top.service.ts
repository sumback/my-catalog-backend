import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Top Service**
 *
 * Service used to access the Top Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/top)
 */
@Injectable()
export class TopService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
