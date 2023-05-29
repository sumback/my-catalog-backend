import { Test, TestingModule } from '@nestjs/testing';
import { GenresController } from '@/controllers/genres.controller';
import { GenresService } from '@/services/genres.service';
import { HttpModule } from '@nestjs/axios';

jest.mock('@/services/genres.service');

describe('GenresController', () => {
  let genresController: GenresController;
  let genresService: GenresService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [GenresController],
      imports: [HttpModule],
      providers: [GenresService],
    }).compile();

    genresService = moduleRef.get<GenresService>(GenresService);
    genresController = moduleRef.get<GenresController>(GenresController);
  });

  it('Should return available list of Anime Genres', () => {
    const result = {
      data: [
        {
          mal_id: 1,
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
          count: 4661,
        },
      ],
    };

    jest.spyOn(genresService, 'getAnimeGenres').mockImplementation(() => Promise.resolve(result));

    expect(genresController.getAnimeGenres()).resolves.toEqual(result);
  });

  it('Should return available list of Manga Genres', () => {
    const result = {
      data: [
        {
          mal_id: 1,
          name: 'Action',
          url: 'https://myanimelist.net/manga/genre/1/Action',
          count: 8789,
        },
      ],
    };

    jest.spyOn(genresService, 'getMangaGenres').mockImplementation(() => Promise.resolve(result));

    expect(genresController.getMangaGenres()).resolves.toEqual(result);
  });
});
