import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Clubs Service**
 *
 * Service used to access the Clubs Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/clubs)
 */
@Injectable()
export class ClubsService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
