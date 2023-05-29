import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Magazines Service**
 *
 * Service used to access the Magazines Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/magazines)
 */
@Injectable()
export class MagazinesService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
