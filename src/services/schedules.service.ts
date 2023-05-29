import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

/**
 * **People Schedules**
 *
 * Service used to access the Schedules Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/schedules)
 */
@Injectable()
export class SchedulesService {
  constructor(private readonly httpService: HttpService) {}

  // TODO
}
