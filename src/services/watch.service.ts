import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Watch Service**
 *
 * Service used to access the Watch Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/watch)
 */
@Injectable()
export class WatchService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
