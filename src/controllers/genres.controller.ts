import { GenresService } from '@/services/genres.service';
import { GenresResponseDto } from '@/shared/dto';
import { GenreQueryFilter } from '@/shared/enums';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('genres')
@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

  @ApiResponse({
    status: 200,
    description: 'Returns entry genres, explicit_genres, themes and demographics',
    type: GenresResponseDto,
  })
  @ApiQuery({ name: 'filter', enum: GenreQueryFilter })
  @Get('/anime')
  async getAnimeGenres(@Query() filter?: GenreQueryFilter): Promise<GenresResponseDto> {
    return this.genresService.getAnimeGenres(filter);
  }

  @ApiResponse({
    status: 200,
    description: 'Returns entry genres, explicit_genres, themes and demographics',
    type: GenresResponseDto,
  })
  @ApiQuery({ name: 'filter', enum: GenreQueryFilter })
  @Get('/manga')
  async getMangaGenres(@Query() filter?: GenreQueryFilter): Promise<GenresResponseDto> {
    return this.genresService.getMangaGenres(filter);
  }
}
