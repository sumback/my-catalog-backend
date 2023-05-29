import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Producers Service**
 *
 * Service used to access the Producers Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/producers)
 */
@Injectable()
export class ProducersService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
