import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { PeopleController } from '@/controllers/people.controller';
import { PeopleService } from '@/services/people.service';

@Module({
  controllers: [PeopleController],
  imports: [HttpModule],
  providers: [PeopleService],
  exports: [PeopleService],
})
export class PeopleModule {}
