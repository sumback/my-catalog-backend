import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Random Service**
 *
 * Service used to access the Random Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/random)
 */
@Injectable()
export class RandomService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
