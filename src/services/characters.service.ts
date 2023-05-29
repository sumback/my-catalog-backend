import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Characters Service**
 *
 * Service used to access the Characters Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/characters)
 */
@Injectable()
export class CharactersService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
