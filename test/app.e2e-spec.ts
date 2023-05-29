import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '@/app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

describe('GenresController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(new FastifyAdapter());

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  describe('Expect OK for all anime endpoints :', () => {
    it.skip('/anime/{id}/full (GET)', () => {
      return request(app.getHttpServer()).get('/anime/1/full').expect(200);
    });

    it.skip('/anime/{id} (GET)', () => {
      return request(app.getHttpServer()).get('/anime/1').expect(200);
    });

    it.skip('/anime/{id}/characters (GET)', () => {
      return request(app.getHttpServer()).get('/anime/1/characters').expect(200);
    });

    it.skip('/anime/{id}/staff (GET)', () => {
      return request(app.getHttpServer()).get('/anime/1/staff').expect(200);
    });

    it.skip('/anime/{id}/episodes (GET)', () => {
      return request(app.getHttpServer()).get('/anime/1/episodes').expect(200);
    });

    it.skip('/anime/{id}/episodes/{episode} (GET)', () => {
      return request(app.getHttpServer()).get('/anime/1/episodes/1').expect(200);
    });

    it.skip('/anime/{id}/news (GET)', () => {
      return request(app.getHttpServer()).get('/anime/1/news').expect(200);
    });
  });

  describe('Expect OK for all genres endpoints :', () => {
    it('/genres/anime (GET)', () => {
      return request(app.getHttpServer()).get('/genres/anime').expect(200);
    });

    it('/genres/manga (GET)', () => {
      return request(app.getHttpServer()).get('/genres/manga').expect(200);
    });
  });

  describe('Expect OK for all magazines endpoints :', () => {
    it.skip('/magazines (GET)', () => {
      return request(app.getHttpServer()).get('/magazines').expect(200);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
