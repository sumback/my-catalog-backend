import { Module } from '@nestjs/common';

import { AnimeModule } from '@/modules/anime.module';
import { CharactersModule } from '@/modules/characters.module';
import { ClubsModule } from '@/modules/clubs.module';
import { GenresModule } from '@/modules/genres.module';
import { MagazinesModule } from '@/modules/magazines.module';
import { MangaModule } from '@/modules/manga.module';
import { PeopleModule } from '@/modules/people.module';
import { ProducersModule } from '@/modules/producers.module';
import { RandomModule } from '@/modules/random.module';
import { RecommendationsModule } from '@/modules/recommendations.module';
import { RevewsModule } from '@/modules/reviews.module';
import { SchedulesModule } from '@/modules/schedules.module';
import { SeasonsModule } from '@/modules/seasons.module';
import { TopModule } from '@/modules/top.module';
import { UsersModule } from '@/modules/users.module';
import { WatchModule } from '@/modules/watch.module';

@Module({
  imports: [
    AnimeModule,
    CharactersModule,
    ClubsModule,
    GenresModule,
    MagazinesModule,
    MangaModule,
    PeopleModule,
    ProducersModule,
    RandomModule,
    RecommendationsModule,
    RevewsModule,
    SchedulesModule,
    SeasonsModule,
    TopModule,
    UsersModule,
    WatchModule,
  ],
})
export class AppModule {}
