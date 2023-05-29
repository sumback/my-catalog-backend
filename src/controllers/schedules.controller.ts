import { SchedulesService } from '@/services/schedules.service';
import { Controller } from '@nestjs/common';

@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) {}

  // TODO
}
