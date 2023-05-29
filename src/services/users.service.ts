import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **Users Service**
 *
 * Service used to access the Users Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/users)
 */
@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
