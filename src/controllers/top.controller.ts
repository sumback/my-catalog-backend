import { TopService } from '@/services/top.service';
import { Controller } from '@nestjs/common';

@Controller('top')
export class TopController {
  constructor(private topService: TopService) {}

  // TODO
}
