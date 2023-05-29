import { BaseURL, GenreQueryFilter, GenresEndpoints } from '@/shared/enums';
import { JikanResource, JikanResponse } from '@/shared/interfaces';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

/**
 * **Genres Service**
 *
 * Service used to access the Genres Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/#tag/genres)
 */
@Injectable()
export class GenresService {
  private readonly logger = new Logger(GenresService.name);

  constructor(private readonly httpService: HttpService) {}

  /**
   * Get available list of Anime Genres
   * @returns {JikanResponse<JikanResource[]>} data
   */
  async getAnimeGenres(filterParam?: GenreQueryFilter): Promise<JikanResponse<JikanResource[]>> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<JikanResponse<JikanResource[]>>(`${BaseURL.REST_API_JIKAN}${GenresEndpoints.AnimeGenres}`, {
          params: filterParam,
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  /**
   * Get available list of Manga Genres
   * @returns {JikanResponse<JikanResource[]>} data
   */
  async getMangaGenres(filterParam?: GenreQueryFilter): Promise<JikanResponse<JikanResource[]>> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<JikanResponse<JikanResource[]>>(`${BaseURL.REST_API_JIKAN}${GenresEndpoints.AnimeGenres}`, {
          params: filterParam,
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}
