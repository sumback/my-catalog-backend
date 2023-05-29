import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Manga Service**
 *
 * Service used to access the Manga Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/manga)
 */
@Injectable()
export class MangaService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
