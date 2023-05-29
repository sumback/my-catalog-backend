import { PeopleService } from '@/services/people.service';
import { Controller } from '@nestjs/common';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  // TODO
}
