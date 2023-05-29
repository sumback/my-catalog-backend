import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Anime Service**
 *
 * Service used to access the Anime Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/anime)
 */
@Injectable()
export class AnimeService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
