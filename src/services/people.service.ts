import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **People Service**
 *
 * Service used to access the People Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/people)
 */
@Injectable()
export class PeopleService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
